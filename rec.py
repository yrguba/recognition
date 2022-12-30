import cv2
import time
from datetime import datetime
import getpass

#imagesFolder = "C:/Users/<user>/documents"

# https://stackoverflow.com/questions/842059/is-there-a-portable-way-to-get-the-current-username-in-python
imagesFolder = "./images"

#cap = cv2.VideoCapture("rtsp://username:password@cameraIP/axis-media/media.amp")

# Use public RTSP Streaming for testing, but I am getting black frames!
cap = cv2.VideoCapture("rtsp://watch:ZimaLeto2022@93.188.122.139:554/cam/realmonitor?channel=1&subtype=0")
frameRate = cap.get(5) #frame rate
count = 0


while cap.isOpened():
    start_time = time.time()

    frameId = cap.get(1)  # current frame number
    ret, frame = cap.read()

    if (ret != True):
        break

    filename = imagesFolder + "/image_" + str(datetime.now().strftime("%d-%m-%Y_%I-%M-%S_%p"))  + ".jpg"
    cv2.imwrite(filename, frame)

    # Show frame for testing
    cv2.imshow('frame', frame)
    cv2.waitKey(1)

    count += 1

    #Break loop after 24*60 minus
    if count > 24*60:
        break

    elapsed_time = time.time() - start_time

    # Wait for 60 seconds (subtract elapsed_time in order to be accurate).
    time.sleep(60 - elapsed_time)


cap.release()
print ("Done!")

cv2.destroyAllWindows()

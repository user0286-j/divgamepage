import cv2

video = cv2.VideoCapture('hola.mp4')

x: int = 0
while video.isOpened():
    ret, frame = video.read()
    if ret:
        cv2.imshow('Frame', frame)
        cv2.imwrite(f"img/{x}.png",frame)
        x+= 1
        if cv2.waitKey(25) & 0xFF == ord('q'):
            break
    else:
        break
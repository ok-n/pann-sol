cakLandServos.resetServos(cakLandServos.ServoPin.P0)
cakLandServos.turnServo(cakLandServos.ServoPin.P0, 0)
basic.forever(function () {
    cakLandLight.displayLuminance(cakLandLight.LightPin.P1)
})

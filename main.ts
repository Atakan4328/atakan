input.onGesture(Gesture.Shake, function () {
    music.ringTone(262)
})
led.plotBarGraph(
0,
0
)
radio.sendValue("name", 0)
basic.forever(function () {
    serial.redirect(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate115200
    )
    music.ringTone(262)
    led.unplot(0, 0)
    radio.sendNumber(0)
    led.unplot(0 % 1, 0)
})

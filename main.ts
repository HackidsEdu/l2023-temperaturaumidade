hackbit.selectTempType(hackbit.tempType.celsius)
HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.writeStringNewLine("hack:bit")
HackbitOLEDDisplay.writeStringNewLine("Estacao Metereologica")
HackbitOLEDDisplay.writeStringNewLine("DHT11 + OLED")
basic.pause(3000)
basic.forever(function () {
    hackbit.queryData(
    hackbit.DHTtype.DHT11,
    DigitalPin.P13,
    true,
    false,
    true
    )
})
basic.forever(function () {
    if (hackbit.readDataSuccessful()) {
        HackbitOLEDDisplay.clear()
        HackbitOLEDDisplay.writeStringNewLine("hack:bit")
        HackbitOLEDDisplay.writeStringNewLine("Estacao Metereologica")
        HackbitOLEDDisplay.writeStringNewLine("DHT11 + OLED")
        HackbitOLEDDisplay.writeString("Temp.: ")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.temperature))
        HackbitOLEDDisplay.writeString("Umid.:")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.humidity))
        basic.pause(5000)
    }
})

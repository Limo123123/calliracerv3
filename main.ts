bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        `)
    basic.setLedColor(0x00ff00)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    basic.setLedColor(0xff0000)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        callibot.motor(KMotor.beide, KDir.vorwärts, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        callibot.motorStop(KMotor.beide, KStop.Frei)
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        callibot.motor(KMotor.links, KDir.vorwärts, 50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        callibot.motorStop(KMotor.links, KStop.Frei)
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        callibot.motor(KMotor.rechts, KDir.vorwärts, 50)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        callibot.motorStop(KMotor.rechts, KStop.Frei)
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
    	
    }
})

*** Settings ***
Library    AppiumLibrary

Resource   steps.robot

*** Keywords ***
Open App
    Open Application    http://localhost:4723/wd/hub
    ...                 automationName=UiAutomator2
    ...                 platformName=Android
    ...                 deviceName=Test
    ...                 app=${EXECDIR}/../app/mobile-weather.apk
    ...                 udid={MY_DEVICE}
    ...                 autoGrantPermissions=true  

    # Checkpoint to ensure we are in the right place
    # Current temperature
    Wait Until Element Is Visible    //android.widget.TextView[@text]    timeout=15s

    Sleep    2s

Close App
    Close Application

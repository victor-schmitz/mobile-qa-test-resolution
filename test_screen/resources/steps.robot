*** Settings ***
Library    AppiumLibrary

*** Keywords ***
Weather forecast
    # Precipitations
    Wait Until Page Contains Element    //android.widget.TextView[contains(@text, "Max.") and contains(@text, "Min.")]    timeout=30s

    # Chance of rain
    Wait Until Element Is Visible    //android.view.ViewGroup[@resource-id="environmental"]/android.view.ViewGroup[1]//android.widget.TextView[contains(@text, "%")]

    # Air humidity
    Wait Until Element Is Visible    //android.view.ViewGroup[@resource-id="environmental"]/android.view.ViewGroup[2]//android.widget.TextView[contains(@text, "%")]

    # Wind speed
    Wait Until Element Is Visible    //android.widget.TextView[contains(@text, "km/h")]

    Capture Page Screenshot

City selection
    Click Element    //android.view.ViewGroup[@resource-id="container"]

    Wait Until Element Is Visible    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]    timeout=25s

    Click Element    //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]

    Sleep    2s

    Capture Page Screenshot

Extended weather forecast
    # Today forecast (Day 1)
    Wait Until Element Is Visible    //android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup//android.widget.TextView[contains(@text, "ºC")][1]    timeout=25s

    # Tomorrow forecast (Day 2)
    Wait Until Element Is Visible    //android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup//android.widget.TextView[contains(@text, "ºC")]

    # Day 3 forecast
    Wait Until Element Is Visible    //android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup//android.widget.TextView[contains(@text, "ºC")]

    # Day 4 forecast
    Wait Until Element Is Visible    //android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup//android.widget.TextView[contains(@text, "ºC")]

    Capture Page Screenshot

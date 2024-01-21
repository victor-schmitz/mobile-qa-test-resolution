*** Settings ***
Resource    resources/base.robot

Task Setup    Open App
Test Teardown    Close App

*** Test Cases ***
# This test will check if the App is checking the main informations on the Main Screen
Check Main Weather Forecast
    Weather forecast

# This test will check if the App is selecting other cities proprerly and checking Its main informations
Check City Selection with Weather Forecast
    Start Screen Recording
    City selection
    Weather forecast
    Stop Screen Recording

# Checking the next few days forecast
Check the Extended Weather Forecast
    Extended weather forecast
  





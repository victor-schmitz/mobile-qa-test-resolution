 

![Logo](https://www.cieb.net.br/evidencias/images/logos/nees.png)
 


# Mobile Weather App - Nees

The application developed as part of the mobile developer selection process is a weather forecast solution developed in React-Native. It uses data from a weather forecast API to display accurate and up-to-date information such as temperature, humidity, wind speed, and other relevant information for the user's current location. The aim is to provide an intuitive and user-friendly experience, with a clear and organized display of the weather information.



## Demonstration

Below, you can find videos demonstrating the use of the app in different scenarios, including during the day and at night, in both rainy and non-rainy conditions, on both iOS and Android versions. The videos provide a clear demonstration of the app's functionality in various scenarios. Check them out!

<table>
  <tr>
    <td>
      <p>Daytime - IOS</p>
      <video src="https://user-images.githubusercontent.com/59540379/235064730-8ea328ce-1d38-4ee5-abcc-999211c5e8df.mp4" width="400" height="300" controls></video>
    </td>
    <td>
      <p>Nighttime - IOS</p>
      <video src="https://user-images.githubusercontent.com/59540379/235065579-d936e540-086b-4154-96d8-16b8fc62e7d4.mp4" width="400" height="300" controls></video>
    </td>
        <td>
      <p>Daytime - ANDROID</p>
            <video src="https://user-images.githubusercontent.com/59540379/235074744-271351fc-20b0-4998-bae5-2927c8664785.webm" width="400" height="300" controls></video>
    </td> 
       <td>
      <p>Nighttime - ANDROID</p>
       <video src="https://user-images.githubusercontent.com/59540379/235074172-60807b7c-8e8e-44aa-8d99-721dce1159f0.webm" width="400" height="300" controls></video>
    </td> 
  </tr>
</table>

## Functionalities

- Weather forecast: display current temperature, weather conditions, chance of rain, air humidity, wind speed, and other information.
- City selection: allow users to search and select the city of their choice to view the weather forecast.
- Weather animations: use animations to visually represent real-time weather conditions, including changes based on the time of day (such as transitions from day to night).
- Extended weather forecast: provide long-term forecasts for the next few days, with information on maximum and minimum temperatures and chance of rain.


## Stack used

**Front-end:** 
- React Native: a framework for building mobile apps using React
- Expo: a set of tools and services for building and deploying React Native apps
- Axios: a popular library for making HTTP requests
- Moment: a library for parsing, validating, manipulating, and displaying dates and times
- Styled Components: a library for styling React components using CSS
- Zustand: a lightweight state management library for React
- Lottie React Native: a library for adding animations to React Native apps
- React Native SVG: a library for rendering SVG images in React Native
- React Native Gesture Handler: a library for handling touch gestures in React Native apps
- React Native Async Storage: a library for persisting data in React Native apps
- React Native Location: a library for getting the user's location in React Native apps
- Husky: a tool for adding git hooks to your project
- Commitlint: a tool for enforcing commit message conventions
- ESLint: a tool for enforcing JavaScript code style and identifying issues

**Back-end:** Api hgbrasil

## Requirements

Node.js

Yarn (ou NPM)

Expo CLI
  
  
  
## How to run the project
To run this project, you need to follow these steps:

Install Node.js on your computer from the official website: https://nodejs.org/

Install the Yarn package manager (you can also use NPM, which comes with Node.js, if you prefer) by running the following command:

```bash
  npm install --global yarn 
```
Install the Expo CLI globally using Yarn (or NPM):
```bash
   yarn global add expo-cli
```
Clone this repository to your computer:
```bash
   git clone https://github.com/ermessonlima/mobile-weather-app.git
```
Navigate to the cloned project folder and install the dependencies:
```bash
   cd mobile-weather-app
   yarn install
```
Start the Expo development server:
```bash
   npx expo start
```
Expo will display a QR code. To view the app on your mobile device, install the Expo Go app, which is available on the App Store (iOS) or the Google Play Store (Android). Once you have installed the app, open it and scan the QR code using your phone's camera or the scanning function within the Expo Go app. This will launch the app on your mobile device, allowing you to view and test its features.
 



## Support
- For support, please send an email to ermessonlimadossantos@gmail.com or contact us via phone/WhatsApp at: +55 82991209850.

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file.

`REACT_APP_BASE_URL:https://api.hgbrasil.com/weather?key={my_key}`

Please provide your key via email or phone.

## Color Documentation

| Name        | Hexadecimal                                                |
| ----------- | ----------------------------------------------------------- |
| WHITE       | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| BLACK       | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| GREY        | ![#7F7F7F](https://via.placeholder.com/10/7F7F7F?text=+) rgba(255,255,255,0.5) |
| CONDITION   | ![#29B2DD](https://via.placeholder.com/10/29B2DD?text=+) #29B2DD, ![#33AADD](https://via.placeholder.com/10/33AADD?text=+) #33AADD, ![#2DC8EA](https://via.placeholder.com/10/2DC8EA?text=+) #2DC8EA |
| DAY_RAIN    | ![#08244F](https://via.placeholder.com/10/08244F?text=+) #08244F, ![#134CB5](https://via.placeholder.com/10/134CB5?text=+) #134CB5, ![#0B42AB](https://via.placeholder.com/10/0B42AB?text=+) #0B42AB |
| NIGHT_RAIN  | ![#00033F](https://via.placeholder.com/10/00033F?text=+) #00033F, ![#000443](https://via.placeholder.com/10/000443?text=+) #000443, ![#000000](https://via.placeholder.com/10/000000?text=+) #000000 |
| NIGHT_CLEAN | ![#44444F](https://via.placeholder.com/10/44444F?text=+) #44444F, ![#888888](https://via.placeholder.com/10/888888?text=+) #888888, ![#444444](https://via.placeholder.com/10/444444?text=+) #444444 |


 

## Font Documentation

| Nome                 | Valor                     |
| -------------------- | ------------------------- |
| REGULAR_SF           | SF-Pro-Display-Regular    |
| MEDIUM_ALEGREYASANS  | AlegreyaSans-Medium       |
| SEMIBOLD_SF          | SF-Pro-Display-Semibold   |
| BOLD_ALEGREYASANS     | AlegreyaSans-Bold         |
| BOLD_SF              | SF-Pro-Display-Bold       |

## Font Weight Documentation

| Nome        | Valor  |
| ----------- | ------ |
| REGULAR_SF  | 400    |
| MEDIUM      | 500    |
| SEMIBOLD_SF | 600    |
| BOLD_SF     | bold   |

## Font Size Documentation

| Nome | Valor |
| ---- | ----- |
| P    | 10    |
| MD   | 14    |
| LG   | 18    |
| XL   | 20    |
| XXL  | 64    |

## Spacing Documentation

| Nome | Valor |
| ---- | ----- |
| P    | 5     |
| PM   | 10    |
| M    | 12    |
| MD   | 20    |
| LM   | 30    |
| LG   | 38    |
| XL   | 40    |

## Rounded Border Documentation

| Nome | Valor |
| ---- | ----- |
| LG   | 20    |


## Developer

- [@ermessonlima](https://github.com/ermessonlima)
 


import React, { ReactElement } from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import HomeScreen from './Screens/HomeScreem/HomeScreen'

export default function App(): ReactElement {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
     <HomeScreen />
    </GestureHandlerRootView>
  )
}

import React, { useEffect, useRef } from 'react'

import LottieView from 'lottie-react-native'
import { SafeAreaView, ScrollView, View } from 'react-native'

import { ContainerProps } from './Background.props'
import { Container, Wrapper } from './Background.styles'

export default function Background({ children }: ContainerProps): React.ReactElement {
  const animation = useRef(null)
  useEffect(() => {
    animation.current?.play() 
  }, [])

  return (


    <Container >
      <SafeAreaView
        style={{
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
          >
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: '100%',
                height: '100%',
                flex: 1
              }}

              source={require('../Animations/animation.json')}
            />

          </View>

          {children}
        </ScrollView>
      </SafeAreaView>
    </Container>


  )
}

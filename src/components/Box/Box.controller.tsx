import React, { useEffect, useRef } from 'react'

import { View } from 'react-native'

import { IUseBoxController } from './Box.props'
import { Animation } from './Box.styles'
import { Icon } from '../../assets/icons/icon'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export const useBoxController = (): IUseBoxController => {
  const { forecast } = useTimeAndTemperature()

  const animation = useRef(null)

  useEffect(() => {
    if (animation.current) {
      // @ts-expect-error
      animation?.current.play()
    }
  }, [])

  const verifyCondition = (condition: string): React.ReactElement => {
    if (condition !== 'rain') {
      return (
        <View
          style={{
            width: 200,
            height: 200,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Animation
            autoPlay
            ref={animation}
            source={require('../Animations/sun.json')}
          />
          <Icon icon="sun" width="200" />
        </View>
      )
    } else {
      return <Icon icon="sun_rain" width="200" />
    }
  }

  return {
    verifyCondition,
    forecast
  }
}

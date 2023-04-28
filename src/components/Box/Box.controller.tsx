import React, { useEffect, useRef } from 'react'

import { View } from 'react-native'

import { IUseBoxController } from './Box.props'
import { Animation } from './Box.styles'
import { Icon } from '../../assets/icons/icon'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'
import { normalize } from '../../utils/normalize'

export const useBoxController = (): IUseBoxController => {
  const { forecast, data } = useTimeAndTemperature()

  const animation = useRef(null)

  useEffect(() => {
    if (animation.current) {
      // @ts-expect-error
      animation?.current.play()
    }
  }, [])

  const verifyCondition = (condition: string): React.ReactElement => {
    if (data.currently === 'noite') {
      return (
        <View
          style={{
            width: 300,
            height: 300,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: normalize(-50)

          }}
        >
          {condition !== 'rain' ? (

              <Animation
                autoPlay
                autoSize
                ref={animation}
                source={require('../Animations/moon.json')}
              />

          ) : (
            <View
              style={{
                width: 300,
                height: 300,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Animation
                autoPlay
                ref={animation}
                source={require('../Animations/moon.json')}
              />
              <Animation
                style={{ position: 'absolute', marginTop: normalize(10) }}
                autoPlay
                ref={animation}
                source={require('../Animations/cloud.json')}
              />
            </View>
          )}
        </View>
      )
    }

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

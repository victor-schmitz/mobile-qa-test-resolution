import { useEffect, useRef } from 'react'

import { IUseBackgroundController } from './Background.props'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'
import theme from '../../theme'

export const useBackgroundController = (): IUseBackgroundController => {
  const { condition } = useTimeAndTemperature()
  const animation = useRef(null)

  useEffect(() => {
    if (condition !== 'rain') {
      theme.COLORS.CONDITION = ['#29B2DD', '#33AADD', '#2DC8EA']
    } else {
      theme.COLORS.CONDITION = ['#08244F', '#134CB5', '#0B42AB']
    }

    if (animation.current) {
      // @ts-expect-error
      animation?.current.play()
    }
  }, [condition])

  return {
    animation
  }
}

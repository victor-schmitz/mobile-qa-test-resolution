import React from 'react'

import { IUseBoxController } from './Box.props'
import { Icon } from '../../assets/icons/icon'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export const useBoxController = (): IUseBoxController => {
  const { forecast } = useTimeAndTemperature()

  const verifyCondition = (condition: string): React.ReactElement => {
    if (condition !== 'rain') {
      return <Icon icon="sun" width="200" />
    } else {
      return <Icon icon="sun_rain" width="200" />
    }
  }

  return {
    verifyCondition,
    forecast
  }
}

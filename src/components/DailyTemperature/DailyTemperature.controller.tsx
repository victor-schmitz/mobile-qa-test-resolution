import React from 'react'

import { IUserDailyTemperature } from './DailyTemperature.props'
import { Icon } from '../../assets/icons/icon'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export const useDailyTemperature = (): IUserDailyTemperature => {
  const { forecast, date } = useTimeAndTemperature()

  const compareDate = (itemDate: string): boolean => {
    const dateSplited = date.split('/')
    if (itemDate === `${dateSplited[0]}/${dateSplited[1]}`) {
      return true
    }
    return false
  }

  const setIcons = (text: string): React.ReactElement => {
    if (text.includes('Chuva')) {
      return <Icon icon="bigRainDrop" width="50" />
    }
    if (text.includes('clear_day')) {
      return <Icon icon="sun" width="50" />
    } else {
      return <Icon icon="sun" width="50" />
    }
  }

  return {
    setIcons,
    compareDate,
    forecast
  }
}

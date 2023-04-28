import * as React from 'react'

import { View } from 'react-native'

import {
  Container,
  ContainerTextTemperature,
  Content,
  ContentMaxMinTemp,
  NextForecastText,
  TextCMax,
  TextCMin,
  TextDay,
  TextTemperatureMax,
  TextTemperatureMin
} from './NextForecast.styles'
import { Icon } from '../../assets/icons/icon'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export default function NextForecast(): React.ReactElement {
  const { forecast } = useTimeAndTemperature()

  function convertDayOfWeek(day: string): string | null {
    switch (day) {
      case 'Seg':
        return 'Monday'
      case 'Ter':
        return 'Tuesday'
      case 'Qua':
        return 'Wednesday'
      case 'Qui':
        return 'Thursday'
      case 'Sex':
        return 'Friday'
      case 'Sáb':
        return 'Saturday'
      case 'Dom':
        return 'Sunday'
      default:
        return null
    }
  }

  const setIcons = (text: string): React.ReactElement => {
    if (text.includes('Chuvas')) {
      return <Icon icon="bigRainDrop" width="50" />
    }
    if (text.includes('clear_day')) {
      return <Icon icon="sun" width="50" />
    } else {
      return <Icon icon="sun" width="50" />
    }
  }

  return (
    <Container>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 20
        }}
      >
        <NextForecastText>Next Forecast</NextForecastText>
        <Icon icon="calendar" width="22" />
      </View>
      {forecast.map((item) => (
        <Content key={item.date}>
          <TextDay>{convertDayOfWeek(item.weekday)}</TextDay>
          <View
            style={{
              width: '33%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {setIcons(item.description)}
          </View>

          <ContentMaxMinTemp>
            <ContainerTextTemperature>
              <TextTemperatureMax>{item.max}</TextTemperatureMax>
              <TextCMax>ºC</TextCMax>
            </ContainerTextTemperature>

            <ContainerTextTemperature>
              <TextTemperatureMin>{item.min}</TextTemperatureMin>
              <TextCMin>ºC</TextCMin>
            </ContainerTextTemperature>
          </ContentMaxMinTemp>
        </Content>
      ))}
    </Container>
  )
}

import * as React from 'react'

import { Text } from 'react-native'

import { Container } from './NextForecast.styles'
import { Icon } from '../../assets/icons/icon'

export default function NextForecast(): React.ReactElement {
  return (
    <Container>
      <Text>Next Forecast</Text>
      <Text>
        <Icon icon="calendar" width="20" />
      </Text>
    </Container>
  )
}

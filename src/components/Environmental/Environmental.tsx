import * as React from 'react'

import { Text } from 'react-native'

import { Container } from './Environmental.styles'
import { Icon } from '../../assets/icons/icon'

export default function Environmental(): React.ReactElement {
  return (
    <Container>
      <Icon icon="humidity" width="20" />
      <Text>6%</Text>
      <Icon icon="temperature" />
      <Text>90%</Text>
      <Icon icon="wind" />
      <Text>19km/h</Text>
    </Container>
  )
}

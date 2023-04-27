import * as React from 'react'

import { Text } from 'react-native'

import { Container } from './Box.styles'
import { Icon } from '../../assets/icons/icon'

export default function Box (): React.ReactElement {
  return (
    <Container >
        <Icon icon="sun"
        width="310"
        />
        <Text>
            28º
        </Text>
        <Text>
            Pricipitations
        </Text>
        <Text>
            Max.: 31º Min.: 25º
        </Text>
    </Container>
  )
}

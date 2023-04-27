import * as React from 'react'

import { Text, TouchableHighlight } from 'react-native'

import { Container, TextLocation } from './PickerLocation.styles'
import { Icon } from '../../assets/icons/icon'

export default function PickerLocation({ onOpen }: any): React.ReactElement {
  return (
    <Container>
      <Icon icon="location" />
      <TouchableHighlight onPress={() => onOpen()}>
        <TextLocation>Location</TextLocation>
      </TouchableHighlight>
      <Icon icon="select" />
    </Container>
  )
}

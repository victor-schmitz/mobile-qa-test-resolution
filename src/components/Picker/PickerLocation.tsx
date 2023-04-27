import * as React from 'react'

import { Text, TouchableHighlight } from 'react-native'

import {   Container, TextLocation } from './PickerLocation.styles'
import { Icon } from '../../assets/icons/icon'

export default function PickerLocation({ onOpen }: any): React.ReactElement {
  return (
    <Container onPress={() => onOpen()}> 
      <Icon icon="location" width='27'/>
        <TextLocation>Location</TextLocation>
      <Icon icon="select"  width='15'/>
    </Container>
  )
}

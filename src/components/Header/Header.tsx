import * as React from 'react'

import { Container } from './Header.styles'
import { Icon } from '../../assets/icons/icon'
import PickerLocation from '../Picker/PickerLocation'

export default function Header ({ onOpen }: any): React.ReactElement {
  return (
    <Container >
        <PickerLocation onOpen={onOpen}/>
        <Icon icon="bell" width='27'/>
    </Container>
  )
}

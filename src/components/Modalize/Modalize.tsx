import React, { ReactElement } from 'react'

import { FlatList, Text, View } from 'react-native'
import { Modalize } from 'react-native-modalize'

import { ModalizeFilterProps } from './Modalize.props'
import {
  ButtonSelectCity,
  Container,
  TextSelectCity,
  style
} from './Modalize.styles'
import { Cities } from './city'

export const ModalizeLocation = ({
  modalizeRef
}: ModalizeFilterProps): ReactElement => {
  return (
    <Modalize
      ref={modalizeRef}
      modalStyle={style.modalize}
      modalHeight={300}
      scrollViewProps={{
        scrollEnabled: true,
        showsVerticalScrollIndicator: false
      }}
      avoidKeyboardLikeIOS
      keyboardAvoidingOffset={-500}
    >
      <Container>
         {
          Cities.map((item, index) => (
            <ButtonSelectCity key={index} >
              <TextSelectCity>{item}</TextSelectCity>
            </ButtonSelectCity>
          ))
         }
         </Container>
    </Modalize>
  )
}

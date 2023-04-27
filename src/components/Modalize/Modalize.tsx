import React, { ReactElement } from 'react'

import { Text, View } from 'react-native'
import { Modalize } from 'react-native-modalize'

import { ModalizeFilterProps } from './Modalize.props'
import {
  style
} from './Modalize.styles'

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
        <View style={{
          flex: 1,
          flexDirection: 'row',
          height: 100,
          padding: 20
        }}>
        <Text>Modalize</Text>
        </View>

    </Modalize>
  )
}

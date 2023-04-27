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
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export const ModalizeLocation = ({
  modalizeRef
}: ModalizeFilterProps): ReactElement => {
  console.log(Cities)
  const { getTimeAndTemperature } = useTimeAndTemperature();
  const closeModalize = async (city) => {
    console.log(city)
    await getTimeAndTemperature({ 
      city
    }); 
    modalizeRef.current?.close()
  }

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
            <ButtonSelectCity key={index} onPress={()=> closeModalize(item)} >
              <TextSelectCity>{item}</TextSelectCity>
            </ButtonSelectCity>
          ))
         }
         </Container>
    </Modalize>
  )
}

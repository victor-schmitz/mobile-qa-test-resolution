import React, { ReactElement } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Modal, Text } from 'react-native'

import {
  Button,
  Container,
  ContainerButton,
  TextButton,
  Content,
  ContainerText
} from './ModalPopup.style'
import useErrorStore from '../../store/error/error.store'
import { normalize } from '../../utils/normalize'

export const ModalPopup = (): ReactElement => {
  const { hasError, closePopup, buttonText, error, title } = useErrorStore()

  if (hasError) {
    return (
      <Modal visible={true} transparent={true}>
        <Container>
          <Content>

            <MaterialCommunityIcons
              name={'close-circle-outline'}
              color={'#CD3D14'}
              size={normalize(35)}
            />

            <ContainerText>
              <Text>{title}</Text>

              <Text>{error}</Text>
            </ContainerText>

            <ContainerButton>
              <Button
                onPress={() => {
                  closePopup()
                }}
              >
                <TextButton>{buttonText}</TextButton>
              </Button>
            </ContainerButton>
          </Content>
        </Container>
      </Modal>
    )
  }
  return (null as unknown) as ReactElement
}

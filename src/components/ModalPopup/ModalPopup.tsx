import React, { ReactElement } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'  
  

import { ModalPopupProps } from './ModalPopup.props'
import {
  styles,
  Button,
  Container,
  ContainerButton,
  DialogTitle,
  ListItemContent,
  ListItemSubtitle,
  ModalPopupButton,
  TextButton
} from './ModalPopup.style'
import { Modal } from 'react-native'
import useErrorStore from '../../store/error/error.store'
import { normalize } from '../../utils/normalize'
export const ModalPopup = ({ icon, color }: ModalPopupProps): ReactElement => {
  const {
    hasError,
    error, 
    closePopup,
    title,
    buttonText,  
  } = useErrorStore()

  if (hasError) {
    return (
      <Modal
        visible={hasError} 
             >
        <Container>
          <ModalPopupButton
            onPress={  () =>  closePopup() }
          >
            <MaterialCommunityIcons name="close" color={'#000'} size={normalize(15)}
            />
          </ModalPopupButton>
          <MaterialCommunityIcons
            name={'close-circle-outline'}
            color={ '#CD3D14'}
            size={normalize(35)}
          />
          <DialogTitle
            title={title} />
          <ListItemContent>
            <ListItemSubtitle>
              {error}
            </ListItemSubtitle>
          </ListItemContent>
          <ContainerButton>
            <Button
              color={color}
              onPress={() => {
                closePopup()
                
              }
              }>
              
                <MaterialCommunityIcons name={icon as any  }
                  color={'#fff'} size={normalize(18)}
                  style={styles.icon} />
              <TextButton>{buttonText}</TextButton>
            </Button>
          </ContainerButton>
        </Container>
      </Modal >
    )
  }
  return null as unknown as ReactElement
}

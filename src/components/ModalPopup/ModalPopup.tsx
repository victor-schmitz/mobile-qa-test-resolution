import React, { ReactElement } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { navigationRef } from '@helpers/navigatorRef'
import { Dialog } from '@rneui/themed'
import useErrorStore from '@store/error/error.store'
import theme from '@theme/index'
import { normalize } from '@utils/normalize'

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
export const ModalPopup = ({ icon, color }: ModalPopupProps): ReactElement => {
  const {
    hasError,
    error,
    type,
    closePopup,
    title,
    buttonText,
    route,
    back
  } = useErrorStore()

  if (hasError) {
    return (
      <Dialog
        isVisible={hasError}
        onBackdropPress={back ? () => {
          closePopup()
          navigationRef.goBack()
        } : () => closePopup()}
        overlayStyle={{ borderRadius: theme.BORDER_RADIUS.LG }}
      >
        <Container>
          <ModalPopupButton
            onPress={back ? () => {
              closePopup()
              navigationRef.goBack()
            } : () => closePopup()}
          >
            <MaterialCommunityIcons name="close" color={'#000'} size={normalize(15)}
            />
          </ModalPopupButton>
          <MaterialCommunityIcons
            name={type === 'success' ? 'check-circle-outline' : 'close-circle-outline'}
            color={type === 'success' ? '#00740C' : '#CD3D14'} size={normalize(35)}
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
                if (route) {
                  navigationRef.current?.navigate(route)
                }
              }
              }>
              {icon || buttonText === 'Compartilhar' &&
                <MaterialCommunityIcons name={icon as any || 'share-variant-outline'}
                  color={'#fff'} size={normalize(18)}
                  style={styles.icon} />}
              <TextButton>{buttonText}</TextButton>
            </Button>
          </ContainerButton>
        </Container>
      </Dialog >
    )
  }
  return null as unknown as ReactElement
}

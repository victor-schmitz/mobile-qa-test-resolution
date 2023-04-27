import { Dialog, ListItem } from '@rneui/themed'
import theme from '@theme/index'
import { normalize } from '@utils/normalize'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const ActivityIndicator = styled.ActivityIndicator``

export const Container = styled.View`
height: ${normalize(180)}px;
align-items: center;
`
export const ContainerButton = styled.View`
width: 100%;
height: ${normalize(100)}px;
justify-content: center;
align-items: center;
`

export const TextButton = styled.Text`
font-style: normal;
font-weight: 500;
font-size: ${normalize(12)}px;
color:  #fff;
text-align: center;
`
interface IButtonProps {
  color?: {
    primary: string
  }
}

export const Button = styled.TouchableOpacity<IButtonProps>`
width:  70%;
height: ${normalize(40)}px;
background:${({ color }) => color ? color.primary : theme.COLORS.PRIMARY};
border-radius: ${normalize(8)}px;;
box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
elevation: 5;
justify-content: center;
margin-top: ${normalize(50)}px;;
align-items: center;
flex-direction: row;
padding-right: ${normalize(10)}px;
padding-left: ${normalize(10)}px;
`
export const ModalPopupButton = styled.TouchableOpacity`
    position: absolute;
    top:0;
    right: 0;
    margin: ${normalize(-5)}px;
`

export const DialogTitle = styled(Dialog.Title).attrs({
  titleStyle: {
    marginTop: normalize(10),
    marginBottom: normalize(-10),
    fontSize: normalize(14)
  }
})`
`
export const ListItemContent = styled(ListItem.Content)`
    margin-top: ${normalize(10)}px;
    margin-bottom: ${normalize(-40)}px;
    height: ${normalize(40)}px;
    text-align: center;
`
export const ListItemSubtitle = styled(ListItem.Subtitle)`
    font-size: ${normalize(12)}px;
    text-align: center;
`

export const styles = StyleSheet.create({
  icon: {
    marginRight: normalize(10)
  }
})

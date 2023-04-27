import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { normalize } from '../../utils/normalize'

export const style = StyleSheet.create({
  motiview: {
    paddingBottom: 40,
    backgroundColor: '#000'
  },
  modalize: {
    marginBottom: -50,
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent'
  }
})

export const Container = styled(LinearGradient).attrs({
  colors: ['#08244F', '#134CB5', '#0B42AB']
  //colors: ['#29B2DD', '#33AADD', '#2DC8EA']
})`
   flex: 1;
   height: 100%;
   background-color: #fff000; 
   padding-horizontal:  ${normalize(10)}px ; 
   margin-bottom: ${normalize(100)}px;
`

export const ButtonSelectCity = styled.TouchableOpacity`
    background-color:  rgba(0, 16, 38, 0.2);
    height: 50px;
    width: 100%; 
    margin: 10px 0px 10px 0px;
    align-items: center;
    justify-content: center;
    border-radius: 10px; 
`

export const TextSelectCity = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
`
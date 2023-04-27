import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { normalize } from '../../utils/normalize'
import theme from '../../theme'

export const style = StyleSheet.create({
  motiview: {
    paddingBottom: 40,
    backgroundColor: '#000'
  },
  modalize: {
    marginBottom: -50,
    width: '100%',
    flex: 1,
    backgroundColor:  theme.COLORS.WHITE,
  }
})

export const Container = styled.View`
   flex: 1;
   height: 100%;
   background-color: #fff; 
   padding-horizontal: ${normalize(10)}px ; 
   margin-bottom: ${normalize(100)}px;
`

export const ButtonSelectCity = styled.TouchableOpacity`
    background-color:  ${({ theme }) => theme.COLORS.CONDITION[0]};
    height: ${normalize(50)}px ; 
    width: 100%; 
    margin: 10px 0px 10px 0px;
    align-items: center;
    justify-content: center;
    border-radius: ${normalize(10)}px;
`

export const TextSelectCity = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD_SF};
    color: ${({ theme }) => theme.COLORS.WHITE};
`
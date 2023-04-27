import styled from 'styled-components/native'
import { normalize } from '../../utils/normalize'

export const Container = styled.View`  
    height: 47px;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 20px; 
    align-items: center; 
`
export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE}; 
  margin-left: ${normalize(5)}px;
`

export const Box = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const TemperatureText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const PrecipitationsText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const MaxAndMinText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR_SF};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom:${({ theme }) => theme.SPACING.LM}px;
`

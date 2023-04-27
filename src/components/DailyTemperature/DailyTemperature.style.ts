import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 20px;
  align-items: center;
`;

interface IContent {
    color:  boolean
}

export const Content = styled.View<IContent>`
  background-color:  ${({ color }) => color ? 'rgba(80, 150, 255, 0.5)' : 'transparent'};
  height: 155px;
  width: 70px;
  border-radius: 20px;
  margin: 10px;
  align-items: center;
  justify-content: space-around;
  border-color:  ${({ color }) => color ? 'rgba(80, 150, 255, 1)' : 'transparent'};
  border-width: ${({ color }) => color ? 1 : 0}px;
`;

export const TextTime = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE}; 
`;

export const TodayText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE}; 
`;

export const MonthText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE}; 
`

export const TextDate = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE}; 
`
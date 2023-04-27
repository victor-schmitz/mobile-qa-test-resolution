import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 20px;
  align-items: center;
`;
export const Content = styled.View`
  background-color: rgba(37, 102, 163, 0.2);
  height: 155px;
  width: 70px;
  border-radius: 20px;
  margin: 10px;
  align-items: center;
  justify-content: space-around;
  border-color: rgba(80, 150, 255, 1);
  border-width: 1px;
`;

export const TextTime = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const NextForecastText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

import * as React from "react";

import { FlatList } from "react-native";

import {
  Container,
  ContainerTitleCard,
  Content,
  MonthText,
  TextDate,
  TextTime,
  TodayText,
} from "./DailyTemperature.style";
import moment from "moment";
import { useDailyTemperature } from "./DailyTemperature.controller";

export default function DailyTemperature(): React.ReactElement {
  const { setIcons, compareDate, forecast } = useDailyTemperature();

  return (
    <Container>
      <ContainerTitleCard>
        <TodayText>Today</TodayText>
        <MonthText>{moment().format("MMMM, DD")}</MonthText>
      </ContainerTitleCard>

      <FlatList
        data={forecast}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.date.toString()}
        horizontal
        renderItem={({ item }) => (
          <Content color={compareDate(item.date)}>
            <TextTime>{item.max}ºC</TextTime>
            {setIcons(item.description)}
            <TextDate>{item.date}</TextDate>
          </Content>
        )}
      />
    </Container>
  );
}

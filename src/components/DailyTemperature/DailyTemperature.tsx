import * as React from "react";

import { FlatList, View } from "react-native";

import {
  Container,
  Content,
  MonthText,
  TextDate,
  TextTime,
  TodayText,
} from "./DailyTemperature.style";
import { Icon } from "../../assets/icons/icon";
import useTimeAndTemperature from "../../store/timeAndTemperature/timeAndTemperature";
import moment from "moment";

export default function DailyTemperature(): React.ReactElement {
  const { forecast, date } = useTimeAndTemperature();

  const compareDate = (itemDate: string) => {
    const dateSplited = date.split("/"); 

    if (itemDate === `${dateSplited[0]}/${dateSplited[1]}`) {
      return true;
    }
    return false;
  };

  const setIcons = (text: string) => {
    if (text.includes("Chuvas")) {
      return <Icon icon="bigRainDrop" width="50" />;
    }
    if (text.includes("clear_day")) {
      return <Icon icon="sun" width="50" />;
    } else {
      return <Icon icon="sun" width="50" />;
    }
  };

  return (
    <Container>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <TodayText>Today</TodayText>
        <MonthText>{moment().format("MMMM, DD")}</MonthText>
      </View>

      <FlatList
        data={forecast}
        contentContainerStyle={{
          width: "100%",
        }}
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

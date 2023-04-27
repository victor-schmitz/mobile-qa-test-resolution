import * as React from "react";

import { FlatList, Text, View } from "react-native";

import { Container, Content, NextForecastText, TextTime } from "./NextForecast.styles";
import { Icon } from "../../assets/icons/icon";
import { Icons } from "../../assets/icons";
import useTimeAndTemperature from "../../store/timeAndTemperature/timeAndTemperature";

export default function NextForecast(): React.ReactElement {
  
  const { forecast } = useTimeAndTemperature();
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
        <NextForecastText>Next Forecast</NextForecastText>
        <Icon icon="calendar" width="22" />
      </View>
      <FlatList
        data={forecast}
        contentContainerStyle={{
          width: "100%",
        }}
        keyExtractor={(item) => item.date.toString()}
        horizontal
        renderItem={({ item }) => (
          <Content>
            <TextTime>{item.date}</TextTime>
            <Icon icon="sunCloud" width="34" />
            <TextTime>15.00</TextTime>
          </Content>
        )}
      />
    </Container>
  );
}

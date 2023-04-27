import * as React from "react";

import { FlatList, Text, View } from "react-native";

import { Container, Content, TextTime } from "./NextForecast.styles";
import { Icon } from "../../assets/icons/icon";

export default function NextForecast(): React.ReactElement {
  const data = [
    {
      id: 1,
      temperature: 1,
      icon: "sunCloud",
      hour: "15.00",
    },
    {
      id: 2,
      temperature: 2,
      icon: "sunCloud",
      hour: "15.00",
    },
    {
      id: 3,
      temperature: 3,
      icon: "sunCloud",
      hour: "15.00",
    },
    {
      id: 4,
      temperature: 5,
      icon: "sunCloud",
      hour: "15.00",
    },
  ];

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
        <Text>Today</Text>
        <Text>Marc, 19</Text>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{
          width: "100%",
        }}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <Content>
            <TextTime>{item.id}</TextTime>
            <Icon icon="sunCloud" width="34" />
            <TextTime>15.00</TextTime>
          </Content>
        )}
      />
    </Container>
  );
}

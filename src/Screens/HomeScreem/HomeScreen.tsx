import React, { ReactElement } from "react";

import { useHomeController } from "./HomeScreen.controller";
import Background from "../../components/Background/Background";
import Box from "../../components/Box/Box";
import Card from "../../components/Card/Card";
import DailyTemperature from "../../components/DailyTemperature/DailyTemperature";
import Environmental from "../../components/Environmental/Environmental";
import Header from "../../components/Header/Header";
import { ModalizeLocation } from "../../components/Modalize/Modalize";
import NextForecast from "../../components/NextForecast/NextForecast";

export default function HomeScreen(): ReactElement {
  const { modalizeRef, onOpen } = useHomeController();
  return (
    <Background>
      <Header onOpen={onOpen} />
      <Box />
      <Card>
        <Environmental />
      </Card>
      <Card paddingVertical={12}>
        <DailyTemperature />
      </Card>
      <Card paddingVertical={12}>
        <NextForecast />
      </Card>
      <ModalizeLocation modalizeRef={modalizeRef} />
    </Background>
  );
}

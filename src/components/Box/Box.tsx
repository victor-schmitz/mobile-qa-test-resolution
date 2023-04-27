import * as React from "react";

import {
  Container,
  TemperatureText,
  PrecipitationsText,
  MaxAndMinText,
} from "./Box.styles";
import { Icon } from "../../assets/icons/icon";
import { useBoxController } from "./Box.controller";

export default function Box(): React.ReactElement {
  const { forecast } = useBoxController();
  return (
    <Container>
      <Icon icon="sun" width="310" />
      <TemperatureText>{forecast[0]?.max}º</TemperatureText>
      <PrecipitationsText>Precipitação</PrecipitationsText>
      <MaxAndMinText>
        Max.: {forecast[0]?.max}º  Min.: {forecast[0]?.min}º
      </MaxAndMinText>
    </Container>
  );
}

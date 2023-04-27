import * as React from "react";

import {
  Container,
  TemperatureText,
  PrecipitationsText,
  MaxAndMinText,
} from "./Box.styles";
import { useBoxController } from "./Box.controller";

export default function Box(): React.ReactElement {
  const { forecast , verifyCondition} = useBoxController();
  
  return (
    <Container>
     {verifyCondition(forecast[0]?.condition)}
      <TemperatureText>{forecast[0]?.max}º</TemperatureText>
      <PrecipitationsText>Precipitação</PrecipitationsText>
      <MaxAndMinText>
        Max.: {forecast[0]?.max}º  Min.: {forecast[0]?.min}º
      </MaxAndMinText>
    </Container>
  );
}

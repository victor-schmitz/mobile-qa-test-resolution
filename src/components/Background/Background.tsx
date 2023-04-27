import React  from "react";
 
import {  ScrollView } from "react-native";

import { ContainerProps } from "./Background.props";
import { Animation, Container, ContainerAnimation, SafeAreaView } from "./Background.styles";
import theme from "../../theme"; 
import { useBackgroundController } from "./Background.controller";

export default function Background({
  children,
}: ContainerProps): React.ReactElement {
  
  const {animation} = useBackgroundController()
  return (
    <Container colors={theme.COLORS.CONDITION}>
      <SafeAreaView >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerAnimation  >
            <Animation
              autoPlay
              ref={animation}
              source={require("../Animations/animation.json")}
            />
          </ContainerAnimation>
          {children}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

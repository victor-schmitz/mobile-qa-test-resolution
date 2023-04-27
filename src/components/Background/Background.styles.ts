import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { normalize } from "../../utils/normalize";
import LottieView from "lottie-react-native";

export const Container = styled(LinearGradient)`
  flex: 1;
  height: 100%;
  background-color: #fff000;
  padding-horizontal: ${normalize(30)}px;
`;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #33aadd;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ContainerAnimation = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Animation = styled(LottieView)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

import { LinearGradient } from 'expo-linear-gradient'
import AnimatedLottieView from 'lottie-react-native'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Animation = styled(AnimatedLottieView)` 
   
`

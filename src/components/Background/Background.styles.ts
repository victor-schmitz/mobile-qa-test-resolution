import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient).attrs({
   colors: ['#08244F', '#134CB5', '#0B42AB']
  //colors: ['#29B2DD', '#33AADD', '#2DC8EA']
})`
    flex: 1;
    height: 100%;
    background-color: #fff000; 
    padding-horizontal: 30px ; 
`
export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: #33AADD;
`

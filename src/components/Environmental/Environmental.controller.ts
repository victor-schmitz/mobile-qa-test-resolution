import { IData } from './Environmental.props'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export const useEnvironmentalController = (): IData => {
  const { data } = useTimeAndTemperature()
  return {
    data
  }
}

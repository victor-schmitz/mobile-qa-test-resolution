import { IData, ITimeAndTemperatureProps } from './timeAndTemperature.dto'
import { instance } from '../../api'

export const getTimeAndTemperatureRequest = async ({
  coords,
  city
}: ITimeAndTemperatureProps): Promise<IData> => {
  try {
    const data = await instance.get(
      `date=2023-04-27&city_name=${city}&lat=${coords?.lat}&lon=${coords?.lon}&locale=pt`
    )
    return data.data.results
  } catch (error) {
    throw new Error('Erro desconhecido')
  }
}

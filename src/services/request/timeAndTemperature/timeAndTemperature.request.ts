import { instance } from "../../api";
import { ITimeAndTemperatureProps } from "./timeAndTemperature.dto";


export const getTimeAndTemperatureRequest = async (props: ITimeAndTemperatureProps) => {
    try {
        const data = await instance.get('https://api.hgbrasil.com/weather?key=4adc6708&date=2023-04-27&city_name=penedo')
     return data.data.results
     } catch (error) {
        throw new Error('Erro desconhecido')
    }
}

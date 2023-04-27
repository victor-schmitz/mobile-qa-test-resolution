import { instance } from "../../api";
import { ITimeAndTemperatureProps } from "./timeAndTemperature.dto";


export const getTimeAndTemperatureRequest = async (props: ITimeAndTemperatureProps) => {
    try {
        const data = await instance.get('')
     
     } catch (error) {
        throw new Error('Erro desconhecido')
    }
}

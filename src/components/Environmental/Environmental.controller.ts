import useTimeAndTemperature from "../../store/timeAndTemperature/timeAndTemperature";

export const useEnvironmentalController = () => {
    const { data } = useTimeAndTemperature();
    return {
        data
    }
}
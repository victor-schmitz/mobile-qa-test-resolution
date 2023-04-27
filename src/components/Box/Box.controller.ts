import useTimeAndTemperature from "../../store/timeAndTemperature/timeAndTemperature";

export const useBoxController = () => {
    const { forecast } = useTimeAndTemperature();
    return {
        forecast
    }
}
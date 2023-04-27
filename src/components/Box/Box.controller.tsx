import { Icon } from "../../assets/icons/icon";
import useTimeAndTemperature from "../../store/timeAndTemperature/timeAndTemperature";

export const useBoxController = () => {
    const { forecast } = useTimeAndTemperature();
   
  const verifyCondition = (condition: string) => {
    if (condition !== "rain") {
     return <Icon icon="sun" width="200" />
    } else   {
      return <Icon icon="sun_rain" width="200" />
    }
  };


  return {
    verifyCondition,
    forecast
  }

}
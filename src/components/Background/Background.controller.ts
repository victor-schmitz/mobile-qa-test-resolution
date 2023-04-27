import { useEffect, useRef } from "react";
import useTimeAndTemperature from "../../store/timeAndTemperature/timeAndTemperature";
import theme from "../../theme";
import { IUseBackgroundController } from "./Background.props";

export const useBackgroundController = () : IUseBackgroundController =>{
    const { codition } = useTimeAndTemperature(); 
    const animation = useRef(null);
  
    
    useEffect(() => {
      if (codition !== "rain") {
        theme.COLORS.CONDITION = ["#29B2DD", "#33AADD", "#2DC8EA"];
      } else {
        theme.COLORS.CONDITION = ["#08244F", "#134CB5", "#0B42AB"];
      } 
    
      animation.current.play() 
    }, [codition]);


    return { 
        animation,
        
    }
}
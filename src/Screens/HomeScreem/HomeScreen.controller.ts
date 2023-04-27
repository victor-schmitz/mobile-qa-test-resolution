import { useEffect, useRef } from "react";

import { IHandles } from "react-native-modalize/lib/options";
import useTimeAndTemperature from "../../store/timeAndTemperature/timeAndTemperature";

export const useHomeController = (): any => {
  const modalizeRef = useRef<IHandles>(null);

  const { getTimeAndTemperature } = useTimeAndTemperature();

  useEffect(() => {
    void getTimeAndTemperature();
  }, []);

  const onOpen = (): void => {
    modalizeRef.current?.open();
  };

  return {
    modalizeRef,
    onOpen,
  };
};

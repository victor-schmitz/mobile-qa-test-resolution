import { useEffect, useRef, useState } from "react";

import { IHandles } from "react-native-modalize/lib/options";
import useTimeAndTemperature from "../../store/timeAndTemperature/timeAndTemperature";

import * as Location from 'expo-location';
import { Alert } from "react-native";

export const useHomeController = (): any => {
  const modalizeRef = useRef<IHandles>(null);  
  const { getTimeAndTemperature } = useTimeAndTemperature();
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
     
      void getTimeAndTemperature({
        coords : {
          lat: location.coords.latitude,
          lon: location.coords.longitude
        }
      }); 
    })();
  }, []);

   

  

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

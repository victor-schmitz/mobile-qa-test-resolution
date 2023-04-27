 
import { create } from 'zustand'
import { useTimeAndTemperatureProps } from './timeAndTemperature.props' 
 

const initialState = { }

const useTimeAndTemperature = create<useTimeAndTemperatureProps>((set, get) => ({
  ...initialState,
 
})) 
export default useTimeAndTemperature

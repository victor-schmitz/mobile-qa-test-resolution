import { create } from 'zustand'

import { FailedRequest } from './timeAndTemperature.message'
import { useTimeAndTemperatureProps } from './timeAndTemperature.props'
import { triggerError } from '../../helpers/triggerError'
import { getTimeAndTemperatureRequest } from '../../services/request/timeAndTemperature/timeAndTemperature.request'

const initialState = {
  isLoading: false,
  data: {
    temp: 0,
    city: '',
    wind_speedy: '',
    description: '',
    forecast: [],
    humidity: 0
  },
  forecast: [],
  date: '',
  condition: ''
}

const useTimeAndTemperature = create<useTimeAndTemperatureProps>(
  (set, get) => ({
    ...initialState,

    getTimeAndTemperature: async ({ coords, city }) => {
      const { makeAsync } = get()
      const handle = async (): Promise<void> => {
        const data = await getTimeAndTemperatureRequest({ coords, city })
        if (data) {
          set({
            data,
            forecast: data.forecast,
            date: data.date,
            condition: data.forecast[0].condition
          })
        }
      }
      const onError = (): void => {
        triggerError(
          FailedRequest.title,
          FailedRequest.description,
          FailedRequest.buttonTitle
        )
      }
      void makeAsync({ handle, onError })
    },

    makeAsync: async ({ handle, onError, onFinally }) => {
      try {
        await handle()
      } catch (error) {
        if (onError != null) {
          return onError(error)
        }
      } finally {
        if (onFinally != null) onFinally()
        set({ isLoading: false })
      }
    }
  })
)
export default useTimeAndTemperature

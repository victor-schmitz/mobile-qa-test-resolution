
import { create } from 'zustand'
import { useTimeAndTemperatureProps } from './timeAndTemperature.props'
import { FailedRequest } from './timeAndTemperature.message'
import { getTimeAndTemperatureRequest } from '../../services/request/timeAndTemperature/timeAndTemperature.request'
import { triggerError } from '../../helpers/triggerError'


const initialState = {
  isLoading: false,
  data: {},
}

const useTimeAndTemperature = create<useTimeAndTemperatureProps>((set, get) => ({
  ...initialState,

  getTimeAndTemperature: async () => {
    const { makeAsync } = get()
    const handle = async (): Promise<any> => {
      const data = await getTimeAndTemperatureRequest({})
      set({ data })
    }
    const onError = (): void => {
      triggerError(FailedRequest.title, FailedRequest.description, FailedRequest.buttonTitle)
    }
    void makeAsync({ handle, onError })

  },

  makeAsync: async ({ handle, onError, onFinally }) => {
    try {
      await handle()
    } catch (error: any) {
      if (onError != null) {
        return onError(error)
      }
    } finally {
      if (onFinally != null) onFinally()
      set({ isLoading: false })
    }
  }
}))
export default useTimeAndTemperature

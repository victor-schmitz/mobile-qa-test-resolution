export type useTimeAndTemperatureProps = {
    isLoading: boolean
    data: any
    getTimeAndTemperature: () => void
    makeAsync: <T>(props: {
        handle: () => Promise<T>
        onError?: (error: any) => void
        onFinally?: () => void
      }) => Promise<void>
 }

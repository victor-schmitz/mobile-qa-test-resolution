export type useTimeAndTemperatureProps = {
    isLoading: boolean
    data: any
    forecast: any
    date: string
    getTimeAndTemperature: () => void
    makeAsync: <T>(props: {
        handle: () => Promise<T>
        onError?: (error: any) => void
        onFinally?: () => void
      }) => Promise<void>
 }

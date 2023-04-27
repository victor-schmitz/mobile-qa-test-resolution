export type useTimeAndTemperatureProps = {
    isLoading: boolean
    data: any
    forecast: any
    date: string
    codition: string
    getTimeAndTemperature: (coords?: ICoord, city?: string ) => void
    makeAsync: <T>(props: {
        handle: () => Promise<T>
        onError?: (error: any) => void
        onFinally?: () => void
      }) => Promise<void>
 }


 export interface ICoord {
    lat: number
    lon: number
 }
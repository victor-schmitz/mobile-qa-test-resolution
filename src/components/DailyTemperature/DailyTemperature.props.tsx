export interface IUserDailyTemperature {
  setIcons: (text: string) => React.ReactElement
  compareDate: (itemDate: string) => boolean
  forecast: any
}

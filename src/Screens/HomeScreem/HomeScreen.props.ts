import { IHandles } from 'react-native-modalize/lib/options'

export interface IUseHomeController {
  isLoading: boolean
  modalizeRef: React.RefObject<IHandles>
  onOpen: () => void
}

import { SvgProps } from 'react-native-svg'

export interface ModalPopupProps {
  icon?: string
  color?: {
    primary: string
  }
}

interface MessageObjectType {
  color: string
  icon: React.FC<SvgProps>
}

export interface MessageTypes {
  error: MessageObjectType
  success: MessageObjectType
  warning: MessageObjectType
}

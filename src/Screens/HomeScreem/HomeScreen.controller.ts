import { useRef } from 'react'

import { IHandles } from 'react-native-modalize/lib/options'

export const useHomeController = (): any => {
  const modalizeRef = useRef<IHandles>(null)

  const onOpen = (): void => {
    modalizeRef.current?.open()
  }

  return {
    modalizeRef,
    onOpen
  }
}

import React, { ReactElement, useEffect, useRef } from 'react'

import { Animation, Container } from './LoadingRequest.styles'

export const LoadingRequest = (): ReactElement => {
  const animation = useRef(null)
  useEffect(() => {
    if (animation.current) {
      // @ts-expect-error
      animation?.current.play()
    }
  }, [])

  return (
        <Container >
            <Animation
                style={{ width: 200, height: 200 }}
                autoPlay
                ref={animation}
                source={require('../Animations/loading.json')}
            />
        </Container>

  )
}

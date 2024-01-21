import React from 'react'

import { render, waitFor } from '@testing-library/react-native'

import Background from '../../../components/Background/Background'

describe('Background', () => {
  it('renders animation when condition is "rain"', async () => {
    const { getByTestId } = render(
      <Background>
        <></>
      </Background>
    )

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({
        currently: 'dia'
      })
    } as any)

    await waitFor(() => {
      expect(getByTestId('background')).toBeDefined()
    })
  })
})

import * as React from 'react'

import Header from '@components/Header/Header'
import { render, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => ({
  Icon: ({ icon }: any) => <>{icon}</>
}))

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Header onOpen={() => {}} />
      </ThemeProvider>
    )

    expect(getByTestId('header')).toBeTruthy()
    expect(getByText('Location')).toBeTruthy()
  })

  it('calls onOpen prop from PickerLocation when PickerLocation is pressed', () => {
    const onOpen = jest.fn()
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header onOpen={onOpen} />
      </ThemeProvider>
    )

    fireEvent.press(getByTestId('container'))

    expect(onOpen).toHaveBeenCalled()
  })
})

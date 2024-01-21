import * as React from 'react'

import Environmental from '@components/Environmental/Environmental'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => ({
  Icon: ({ icon }: any) => <>{icon}</>
}))

jest.mock('@components/Environmental/Environmental.controller', () => ({
  useEnvironmentalController: jest.fn(() => ({
    data: {
      temp: 22,
      city: 'Sample City',
      wind_speedy: '5 m/s',
      description: 'Sample Description',
      forecast: [],
      humidity: 60,
      date: '2024-01-21'
    }
  }))
}))

describe('Environmental component', () => {
  it('renders correctly with mock data', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Environmental />
      </ThemeProvider>
    )

    expect(getByTestId('environmental')).toBeTruthy()
    expect(getByText('22%')).toBeTruthy()
    expect(getByText('5 m/s')).toBeTruthy()
  })
})

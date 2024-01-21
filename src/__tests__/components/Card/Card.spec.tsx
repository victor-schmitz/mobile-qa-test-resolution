import * as React from 'react'

import Card from '@components/Card/Card'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from '../../../theme'

describe('Card component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Card>Test Content</Card>
      </ThemeProvider>
    )

    expect(getByTestId('card')).toBeTruthy()
  })
})

import * as React from 'react'

import { useEnvironmentalController } from './Environmental.controller'
import { Box, Container, Text } from './Environmental.styles'
import { Icon } from '../../assets/icons/icon'

export default function Environmental(): React.ReactElement {
  const { data } = useEnvironmentalController()
  return (
    <Container>
      <Box>
        <Icon icon="humidity" width="24" />
        <Text>{data.humidity}%</Text>
      </Box>
      <Box>
        <Icon icon="temperature" width="24" />
        <Text>{data.temp}%</Text>
      </Box>
      <Box>
        <Icon icon="wind" width="22" />
        <Text>{data.wind_speedy}</Text>
      </Box>
    </Container>
  )
}

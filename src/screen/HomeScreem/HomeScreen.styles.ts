import styled from 'styled-components/native'

import { normalize } from '../../utils/normalize'

export const Container = styled.View`
  background-color: rgba(0, 16, 38, 0.2);
  height: ${normalize(40)}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.SPACING.MD}px;
`

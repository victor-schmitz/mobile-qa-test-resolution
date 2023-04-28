import styled from 'styled-components/native'

export const Container = styled.View`  
    height: 40px;
    width: 100%;
    border-radius: ${({ theme }) => theme.SPACING.MD}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

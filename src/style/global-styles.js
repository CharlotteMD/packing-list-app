import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: fantasy;
  color: ${(props) => props.textColor || 'palevioletred'};
`

export const Body = styled.body`
  background: ${(props) => props.theme.colors.background};
`

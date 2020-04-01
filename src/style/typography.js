import styled, { css } from 'styled-components'

export const H1 = styled.h1`
  font-size: 30px;
  line-height: 1.5em;
`

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 1.5em;
`

export const H3 = styled.h3`
  font-size: 16px;
  line-height: 1.3em;
`

export const P = styled.p(
  ({ small }) =>
    small &&
    css`
      font-size: 14px;
      line-height: 1.25em;
      opacity: 0.5;
    `
)

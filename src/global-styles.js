import styled, { css } from 'styled-components'

export const H1 = styled.h1`
  font-family: fantasy;
  color: red;
`

export const BasicButton = styled.button`
  border: none;
  background-color: transparent;
  height: auto;

  ${(props) =>
    props.textButton &&
    css`
      border: solid 1px lime;
    `};
`

import styled, { css } from 'styled-components'

export const CountText = styled.p`
  color: blue;

  ${(props) =>
    props.count &&
    props.count > 3 &&
    css`
      color: orange;
    `};
`

import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

export const Rotate = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 1.2rem;

  &:hover {
    animation: ${rotate} 2s linear infinite;
  }
`

const fontGrow = keyframes`
  0%, 100% {
    font-size: 10px;
  }
  30% {
    font-size: 15px;
  }`

export const FontGrow = styled.div`
  &:hover {
    animation: ${fontGrow} 2s infinite;
  }
`

const move = keyframes`
    from { top: 0; left: 0; }
    to   { top: 100px; left: 100px; }
`

export const Move = styled.div`
  &:hover {
    animation: ${move} 5s infinite alternate;
  }
`

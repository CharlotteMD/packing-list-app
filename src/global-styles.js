import styled, { css, keyframes } from 'styled-components'

export const H1 = styled.h1`
  font-family: fantasy;
  color: ${(props) => props.textColor || 'palevioletred'};
`

export const BasicButton = styled.button`
  border: none;
  background-color: transparent;
  height: auto;
  color: purple;

  ${(props) =>
    props.textButton &&
    css`
      border: solid 1px lime;
    `};

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: skyblue;
    `};
`

export const ListItem = styled.li`
  font-family: cursive;
`

export const AnchorLink = styled.a`
  text-decoration: none;
  color: orange;
`

export const EmojiSpan = styled.span.attrs(({ ariaRef }) => ({
  role: 'img',
  'aria-label': ariaRef || 'emoji'
}))`
  font-size: 100px;
  line-height: 1.5em;
`
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

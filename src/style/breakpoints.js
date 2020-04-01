import { css } from 'styled-components'

export const BREAKPOINTS = {
  desktopWide: 1200,
  desktop: 1024,
  tablet: 768,
  mobile: 320
}

export const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

/**
 * Example use case:
 *
 * const Container = styled.div`
 *   background: hotpink;
 *   max-width: ${BREAKPOINTS.desktop}px;
 *
 *   ${MEDIA.tablet`
 *     background: blue;
 *   `}
 *
 *   ${MEDIA.desktop`
 *     background: red;
 *   `}
 * `;
 **/

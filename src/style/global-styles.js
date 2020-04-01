import { createGlobalStyle } from 'styled-components'

import { BREAKPOINTS } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
    
    body {
      font-family: 'Assistant', sans-serif; 
      font-size: 16px;
      line-height: 1.25em;
      color: ${(props) => props.theme.colors.textColor};
      max-width: ${BREAKPOINTS.mobile}px;
      margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
    }
`

import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Body } from './style/global-styles'

import { Questions } from './Questions'

import SummerTheme from './style/themes/summerTheme'
import WinterTheme from './style/themes/winterTheme'

const App = () => {
  const [theme, setTheme] = useState('SummerTheme')

  const summerHoliday = () => {
    setTheme('SummerTheme')
  }

  const winterHoliday = () => {
    setTheme('WinterTheme')
  }

  return (
    <ThemeProvider theme={theme === 'SummerTheme' ? SummerTheme : WinterTheme}>
      <Body>
        <div className="App">
          <button onClick={summerHoliday}>Summer hols</button>
          <button onClick={winterHoliday}>Winter hols</button>
          <Questions />
        </div>
      </Body>
    </ThemeProvider>
  )
}

export default App

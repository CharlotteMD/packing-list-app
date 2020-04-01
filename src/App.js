import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Questions } from './Questions'

import { GlobalStyles } from './style/global-styles'
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
      <div className="App">
        <GlobalStyles />
        <h1>You're going on holiday!</h1>
        <button onClick={summerHoliday}>Summer hols</button>
        <button onClick={winterHoliday}>Winter hols</button>
        <Questions />
      </div>
    </ThemeProvider>
  )
}

export default App

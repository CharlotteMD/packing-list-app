import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, { css, ThemeProvider } from 'styled-components'
import { H1, BasicButton, Anchorlink, EmojiSpan } from './style/global-styles'
import SummerTheme from './style/themes/summerTheme'
import WinterTheme from './style/themes/winterTheme'
import { Rotate, FontGrow } from './style/keyframe-animations'
import BasicOutfits from './components/items/BasicOutfits'
import Essentials from './components/items/Essentials'

const CountText = styled.p`
  color: blue;

  ${(props) =>
    props.count &&
    props.count > 3 &&
    css`
      color: orange;
    `};
`

const App = () => {
  const [count, setCount] = useState(0)
  const [leaveUk, setLeaveUk] = useState()
  const [weather, setWeather] = useState('not sure')
  const [theme, setTheme] = useState('SummerTheme')
  const [location, setLocation] = useState('london')

  const summerHoliday = () => {
    setTheme('SummerTheme')
  }

  const winterHoliday = () => {
    setTheme('WinterTheme')
  }

  async function getWeather() {
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
          {
            crossdomain: true
          }
        )
        .then((result) => {
          const currentWeather = result.data.weather[0].description
          setWeather(currentWeather)
        })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getWeather()
  })

  return (
    <ThemeProvider theme={theme === 'SummerTheme' ? SummerTheme : WinterTheme}>
      <div className="App">
        <button onClick={summerHoliday}>Summer hols</button>
        <button onClick={winterHoliday}>Winter hols</button>

        <H1 textColor="orange">Let's send you packing!</H1>
        <FontGrow>
          <H1>Holiday time!</H1>
        </FontGrow>
        <div className="questions">
          <p>Where are you going?</p>
          {!!leaveUk && (
            <Rotate>
              <EmojiSpan ariaRef="leave-UK">🛫</EmojiSpan>
            </Rotate>
          )}
          {!leaveUk && <EmojiSpan ariaRef="UK">🇬🇧</EmojiSpan>}
          <BasicButton textButton onClick={() => setLeaveUk(false)}>
            Staying in the UK
          </BasicButton>
          <BasicButton textButton onClick={() => setLeaveUk(true)}>
            Going far away
          </BasicButton>

          <div className="location">
            <h2>Where are you going?</h2>
            <p>I'm going to {location}</p>
            {weather && <p>The weather is {weather}</p>}

            <BasicButton onClick={() => setLocation('london')}>
              <EmojiSpan ariaRef="UK">🇬🇧</EmojiSpan>
            </BasicButton>
            <BasicButton onClick={() => setLocation('bangkok')}>
              <EmojiSpan ariaRef="Thailand">🇹🇭</EmojiSpan>
            </BasicButton>
            <BasicButton onClick={() => setLocation('oslo')}>
              <EmojiSpan ariaRef="Norway">🇹🇳</EmojiSpan>
            </BasicButton>
          </div>

          <h3>How many nights will you be away for?</h3>
          <CountText count={count}>{count} nights</CountText>
          <BasicButton textButton onClick={() => setCount(count - 1)}>
            -1 night
          </BasicButton>
          <BasicButton textButton onClick={() => setCount(count + 1)}>
            +1 night
          </BasicButton>

          <h5>What weather are you expecting?</h5>
          <p>{weather}</p>
          <BasicButton backgroundColor onClick={() => setWeather('sun')}>
            <EmojiSpan ariaRef="sun">☀️</EmojiSpan>
          </BasicButton>
          <BasicButton backgroundColor onClick={() => setWeather('rain')}>
            <EmojiSpan ariaRef="rain">☔️</EmojiSpan>
          </BasicButton>
          <BasicButton backgroundColor onClick={() => setWeather('snow')}>
            <EmojiSpan ariaRef="snow">❄️</EmojiSpan>
          </BasicButton>
        </div>
        <div className="packingList">
          <h1>You should take</h1>
          <Essentials leaveUk={leaveUk} />
          <BasicOutfits count={count} />
        </div>
        <BasicButton
          as="Anchorlink"
          href="https://www.skyscanner.net/news/tips/skyscanners-essential-packing-list"
        >
          See the list online
        </BasicButton>
        <Anchorlink href="https://www.charlottemdavies.co.uk">
          <EmojiSpan ariaRef="Charlotte Davies">👩🏻‍💻</EmojiSpan>
          Charly McDavies
        </Anchorlink>
      </div>
    </ThemeProvider>
  )
}

export default App

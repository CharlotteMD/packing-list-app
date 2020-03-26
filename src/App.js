import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import { BasicButton, EmojiSpan } from './style/global-styles'
import { CountText } from './style/App-styles'
import SummerTheme from './style/themes/summerTheme'
import WinterTheme from './style/themes/winterTheme'
import { Rotate } from './style/keyframe-animations'
import { Header } from './components/App/Header.js'
import { Footer } from './components/App/Footer.js'
import BasicOutfits from './components/items/BasicOutfits'
import Essentials from './components/items/Essentials'

const App = () => {
  const [count, setCount] = useState(0)
  const [leaveUk, setLeaveUk] = useState()
  const [weather, setWeather] = useState('not sure')
  const [theme, setTheme] = useState('SummerTheme')
  const [location, setLocation] = useState('london')
  const [countries, setCountries] = useState()

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

  async function getCountry() {
    try {
      await axios
        .get('https://restcountries.eu/rest/v2/all?fields=name;', {
          crossdomain: true
        })
        .then((result) => {
          let countriesList = []
          const countryInformation = result.data

          countryInformation.forEach((countries) =>
            countriesList.push(countries.name)
          )
          setCountries(countriesList)
        })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getWeather()
  })

  getCountry()

  return (
    <ThemeProvider theme={theme === 'SummerTheme' ? SummerTheme : WinterTheme}>
      <div className="App">
        <button onClick={summerHoliday}>Summer hols</button>
        <button onClick={winterHoliday}>Winter hols</button>

        <Header />

        <div className="questions">
          <p>Where are you going?</p>
          {!!countries && (
            <ul>
              {countries.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          )}

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
        </div>
        <div className="packingList">
          <h1>You should take</h1>
          <Essentials leaveUk={leaveUk} />
          <BasicOutfits count={count} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

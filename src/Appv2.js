import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'

import countriesList from './countries.json'
import { Header } from './components/App/Header.js'
import { Footer } from './components/App/Footer.js'
import BasicOutfits from './components/items/BasicOutfits'
// import Essentials from './components/items/Essentials'

import { BasicButton, EmojiSpan } from './style/global-styles'
import { CountText } from './style/App-styles'
import SummerTheme from './style/themes/summerTheme'
import WinterTheme from './style/themes/winterTheme'

const App = () => {
  const [count, setCount] = useState(0)
  // const [weather, setWeather] = useState('not sure')
  const [theme, setTheme] = useState('SummerTheme')
  const [location, setLocation] = useState('london')
  const [countries, setCountries] = useState()
  const [holidayDestination, setHolidayDestination] = useState()
  const [countryInformation, setCountryInformation] = useState()
  const [updateCountry, setUpdateCountry] = useState(false)

  const summerHoliday = () => {
    setTheme('SummerTheme')
  }

  const winterHoliday = () => {
    setTheme('WinterTheme')
  }

  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

  // async function getWeather() {
  //   try {
  //     await axios
  //       .get(
  //         // `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  //         {
  //           crossdomain: true
  //         }
  //       )
  //       .then((result) => {
  //         const currentWeather = result.data.weather[0].description
  //         setWeather(currentWeather)
  //       })
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // const getCountryInformation = () => {
  //   if ()
  // }
  async function getCountryInfomation(holidayDestination) {
    try {
      await axios
        .get(`https://restcountries.eu/rest/v2/name/${holidayDestination}`, {
          crossdomain: true
        })
        .then((result) => {
          const countryData = result.data
          setCountryInformation(countryData)
          console.log('all info', countryData)
          setUpdateCountry(false)
          return countryData
        })
        .then((countryData) => {
          console.log('all info', countryData)
          console.log('latlang', countryData[0].latlng)
          setCountryInformation(countryData)
        })
    } catch (e) {
      console.error(e)
    }
  }

  const getLatLng = () => {
    if (!!countryInformation) {
      console.log('latlng country', countryInformation)
      const latLng = countryInformation[0].latlng
      console.log('latlng', latLng)
      const lattitude = countryInformation[0].latlng[0]
      console.log('lat', lattitude)
      const longitude = countryInformation[0].latlng[1]
      console.log('lng', longitude)
    }
  }

  // const InfomationInformation = () => {
  //   if (!!holidayDestination) {
  //     getCountry()
  //     getLatLng()
  //   }
  // }

  const handleCountryChange = (country) => {
    setHolidayDestination(country)
    setUpdateCountry(true)
    getLatLng()
  }

  // async function handleCountryChange(country) {
  //   try {
  //     await (() => {
  //       setHolidayDestination(country)
  //       setUpdateCountry(true)
  //     })
  //       .then(() => {
  //         getLatLng()
  //       })
  //       .then((countryData) => {})
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  useEffect(() => {
    if (!!updateCountry) {
      getCountryInfomation(holidayDestination)
    }
    // getWeather()
    // getCountryInformation()
    // getCountry()
  })
  // getCountryInformation()
  return (
    <ThemeProvider theme={theme === 'SummerTheme' ? SummerTheme : WinterTheme}>
      <div className="App">
        <button onClick={summerHoliday}>Summer hols</button>
        <button onClick={winterHoliday}>Winter hols</button>

        <Header />

        <div className="questions">
          <p>Where are you going?</p>
          {!!holidayDestination && <p>I'm going to {holidayDestination}</p>}
          <ul>
            {countriesList.map((country) => (
              <button onClick={() => handleCountryChange(country)}>{country}</button>
            ))}
          </ul>

          <div className="location">
            <h2>Where are you going?</h2>
            <p>I'm going to {location}</p>
            {/* {weather && <p>The weather is {weather}</p>} */}

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
          {/* <Essentials leaveUk={leaveUk} /> */}
          <BasicOutfits count={count} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

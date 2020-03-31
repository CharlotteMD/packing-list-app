import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'

import { Questions } from './Questions'

import SummerTheme from './style/themes/summerTheme'
import WinterTheme from './style/themes/winterTheme'

const App = () => {
  const [theme, setTheme] = useState('SummerTheme')
  const [holidayDestination, setHolidayDestination] = useState()
  const [countryInformation, setCountryInformation] = useState()
  const [updateCountry, setUpdateCountry] = useState(false)

  const summerHoliday = () => {
    setTheme('SummerTheme')
  }

  const winterHoliday = () => {
    setTheme('WinterTheme')
  }

  // async function getCountryInfomation(holidayDestination) {
  //   try {
  //     await axios
  //       .get(`https://restcountries.eu/rest/v2/name/${holidayDestination}`, {
  //         crossdomain: true
  //       })
  //       .then((result) => {
  //         const countryData = result.data
  //         setCountryInformation(countryData)
  //         console.log('all info', countryData)
  //         setUpdateCountry(false)
  //         return countryData
  //       })
  //       .then((countryData) => {
  //         console.log('all info', countryData)
  //         console.log('latlang', countryData[0].latlng)
  //         setCountryInformation(countryData)
  //       })
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // const getLatLng = () => {
  //   if (!!countryInformation) {
  //     console.log('latlng country', countryInformation)
  //     const latLng = countryInformation[0].latlng
  //     console.log('latlng', latLng)
  //     const lattitude = countryInformation[0].latlng[0]
  //     console.log('lat', lattitude)
  //     const longitude = countryInformation[0].latlng[1]
  //     console.log('lng', longitude)
  //   }
  // }

  // const handleCountryChange = (country) => {
  //   setHolidayDestination(country)
  //   setUpdateCountry(true)
  //   getLatLng()
  // }

  // useEffect(() => {
  //   if (!!updateCountry) {
  //     getCountryInfomation(holidayDestination)
  //   }
  // })

  return (
    <ThemeProvider theme={theme === 'SummerTheme' ? SummerTheme : WinterTheme}>
      <div className="App">
        <button onClick={summerHoliday}>Summer hols</button>
        <button onClick={winterHoliday}>Winter hols</button>

        <Questions />
      </div>
    </ThemeProvider>
  )
}

export default App

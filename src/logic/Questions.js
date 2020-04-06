import React, { useState, useEffect } from 'react'
import axios from 'axios'

import countriesList from './countries'

import { H2, P } from '../style/typography'

export const Questions = () => {
  const [holidayDestination, setHolidayDestination] = useState()
  const [updatingCountry, setUpdatingCountry] = useState(false)
  const [fullCountryData, setFullCountryData] = useState()
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [goWeather, setGoWeather] = useState(false)
  const [weatherReady, setWeatherReady] = useState(false)
  const [fullWeatherData, setFullWeatherData] = useState()

  async function getCountryInformation(holidayDestination) {
    try {
      await axios
        .get(`https://restcountries.eu/rest/v2/name/${holidayDestination}`, {
          crossdomain: true
        })
        .then((result) => {
          const countryData = result.data
          const latlng = countryData[0].latlng
          setFullCountryData(countryData[0])
          setUpdatingCountry(false)
          setWeatherReady(true)
          return latlng
        })
    } catch (e) {
      console.error(e)
    }
  }

  async function getLatAndLang(newCountryLat, newCountryLng) {
    setLat(newCountryLat)
    setLng(newCountryLng)
    await setGoWeather(true)
    return goWeather
  }

  const handleCountryChange = (country) => {
    setHolidayDestination(country, setUpdatingCountry(true))
  }

  // let fullWeather = {}

  async function getWeather() {
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
          {
            crossdomain: true
          }
        )
        .then((result) => {
          let fullWeather = result.data
          return fullWeather
        })
    } catch (e) {
      console.error(e)
    }
  }

  const getCountryValue = () => {
    var selectedCountryFromList = document.getElementById('countrylist')
    var selectedCountry = selectedCountryFromList.value
    handleCountryChange(selectedCountry)
  }

  useEffect(() => {
    if (!!updatingCountry) {
      getCountryInformation(holidayDestination)
    }

    if (!!fullCountryData) {
      const newCountryLat = fullCountryData.latlng[0]
      const apiLat = Math.round(newCountryLat)
      const newCountryLng = fullCountryData.latlng[1]
      const apiLng = Math.round(newCountryLng)
      getLatAndLang(apiLat, apiLng)
    }

    if (!!goWeather) {
      const getWeatherResult = getWeather()
      setFullWeatherData(getWeatherResult)
      console.log(fullWeatherData)
    }

    // if (!!fullWeatherData) {
    //   console.log(fullWeatherData)
    // }
  })

  return (
    <div className="questions">
      <H2>Where are you going?</H2>
      {!!holidayDestination && <P>I'm going to {holidayDestination}</P>}

      {!updatingCountry && (
        <form action="">
          <fieldset>
            <select id="countrylist">
              <option value="" disabled selected>
                Select your destination
              </option>
              {countriesList.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </select>
            <input type="button" onClick={() => getCountryValue()} value="Select" />
          </fieldset>
        </form>
      )}

      {/* {!!fullWeatherData && <p>Weather is {}</p>} */}
    </div>
  )
}

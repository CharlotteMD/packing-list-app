import React, { useState, useEffect } from 'react'
import axios from 'axios'

import countriesList from './countries'

export const Questions = () => {
  const [holidayDestination, setHolidayDestination] = useState()
  const [updatingCountry, setUpdatingCountry] = useState(false)
  const [fullCountryData, setFullCountryData] = useState()
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [goWeather, setGoWeather] = useState(false)

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
          return latlng
        })
    } catch (e) {
      console.error(e)
    }
  }

  async function getLatAndLang(newCountryLat, newCountryLng) {
    setLat(newCountryLat)
    setLng(newCountryLng)
    console.log("I'm ready!!", lat, lng)
    await setGoWeather(true)
    return goWeather
  }

  const handleCountryChange = (country) => {
    setHolidayDestination(country, setUpdatingCountry(true))
  }

  async function getWeather() {
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
          {
            crossdomain: true
          }
        )
        .then((result) => {
          console.log(result)
        })
    } catch (e) {
      console.error(e)
    }
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
      console.log('here', goWeather)
    }

    if (!!goWeather) {
      getWeather()
    }
  })

  return (
    <div className="questions">
      <p>Where are you going?</p>
      {!!holidayDestination && <p>I'm going to {holidayDestination}</p>}

      {!updatingCountry && (
        <ul id="mylist">
          {countriesList.map((country) => (
            <button onClick={() => handleCountryChange(country)}>{country}</button>
          ))}
        </ul>
      )}
    </div>
  )
}

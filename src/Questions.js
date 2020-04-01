import React, { useState, useEffect } from 'react'
import axios from 'axios'

import countriesList from './countries'

export const Questions = () => {
  const [holidayDestination, setHolidayDestination] = useState()
  const [updatingCountry, setUpdatingCountry] = useState(false)
  const [fullCountryData, setFullCountryData] = useState()
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()

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

  const handleCountryChange = (country) => {
    setHolidayDestination(country, setUpdatingCountry(true))
  }

  useEffect(() => {
    if (!!updatingCountry) {
      getCountryInformation(holidayDestination)
    } else {
    }
  })

  useEffect(() => {
    if (!!fullCountryData) {
      const newCountryLat = fullCountryData.latlng[0]
      const newCountryLng = fullCountryData.latlng[1]
      setLat(newCountryLat)
      setLng(newCountryLng)
    } else {
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

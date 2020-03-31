import React, { useState, useEffect } from 'react'
import axios from 'axios'

import countriesList from './countries'

export const Questions = () => {
  const [holidayDestination, setHolidayDestination] = useState()
  const [updatingCountry, setUpdatingCountry] = useState(false)
  const [fullCountryData, setFullCountryData] = useState()

  async function getCountryInformation(holidayDestination) {
    try {
      await axios
        .get(`https://restcountries.eu/rest/v2/name/${holidayDestination}`, {
          crossdomain: true
        })
        .then((result) => {
          const countryData = result.data
          setFullCountryData(countryData)
          setUpdatingCountry(false)
          return countryData
        })
    } catch (e) {
      console.error(e)
    }
  }

  const handleCountryChange = (country) => {
    setHolidayDestination(country)
    setUpdatingCountry(true)
  }

  useEffect(() => {
    if (!!updatingCountry) {
      getCountryInformation(holidayDestination)
      console.log(fullCountryData)
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

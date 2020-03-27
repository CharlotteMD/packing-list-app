import React, { useState } from 'react'
import axios from 'axios'

import countriesList from './countries'

export const Questions = () => {
  const [holidayDestination, setHolidayDestination] = useState()
  //   const [updateCountry, setUpdateCountry] = useState(false)
  const [fullCountryData, setFullCountryData] = useState()

  async function getCountryInformation() {
    try {
      await axios
        .get(`https://restcountries.eu/rest/v2/name/${holidayDestination}`, {
          crossdomain: true
        })
        .then((result) => {
          const countryData = result.data
          setFullCountryData(countryData)
          console.log('all info', fullCountryData)
          //   setUpdateCountry(false)
        })
    } catch (e) {
      console.error(e)
    }
  }

  //   const handleCountryChange = (country) => {
  //     setHolidayDestination(country)
  //     setUpdateCountry(true)
  //     getCountryInformation()
  //     // getLatLng()
  //   }

  async function handleCountryChange(country) {
    // setUpdateCountry(true)
    await setHolidayDestination(country)
    await getCountryInformation
    // setUpdateCountry(false)
  }

  //   const getLatLng = () => {
  //     if (!!countryInformation) {
  //       console.log('latlng country', countryInformation)
  //       const latLng = countryInformation[0].latlng
  //       console.log('latlng', latLng)
  //       const lattitude = countryInformation[0].latlng[0]
  //       console.log('lat', lattitude)
  //       const longitude = countryInformation[0].latlng[1]
  //       console.log('lng', longitude)
  //     }
  //   }

  return (
    <div className="questions">
      <p>Where are you going?</p>
      {!!holidayDestination && <p>I'm going to {holidayDestination}</p>}

      <ul id="mylist">
        {countriesList.map((country) => (
          <button onClick={() => handleCountryChange(country)}>{country}</button>
        ))}
      </ul>
    </div>
  )
}

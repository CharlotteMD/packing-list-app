import React, { useState } from 'react'
import './App.css'
import { H1, BasicButton } from './global-styles'

import BasicOutfits from './components/items/BasicOutfits'
import Essentials from './components/items/Essentials'

const App = () => {
  const [count, setCount] = useState(0)
  const [leaveUk, setLeaveUk] = useState()
  const [weather, setWeather] = useState('not sure')

  return (
    <div className="App">
      <H1>Let's send you packing!</H1>
      <div className="questions">
        <p>Where are you going?</p>
        {!!leaveUk && (
          <p>
            <span role="img" aria-label="leaving-UK">
              🛫
            </span>
          </p>
        )}
        {!leaveUk && (
          <p>
            <span role="img" aria-label="UK">
              🇬🇧
            </span>
          </p>
        )}
        <BasicButton textButton onClick={() => setLeaveUk(false)}>
          Staying in the UK
        </BasicButton>
        <BasicButton textButton onClick={() => setLeaveUk(true)}>
          Going far away
        </BasicButton>

        <h3>How many nights will you be away for?</h3>
        <p>{count} nights</p>
        <BasicButton textButton onClick={() => setCount(count - 1)}>
          -1 night
        </BasicButton>
        <BasicButton textButton onClick={() => setCount(count + 1)}>
          +1 night
        </BasicButton>

        <h5>What weather are you expecting?</h5>
        <p>{weather}</p>
        <BasicButton onClick={() => setWeather('sun')}>
          <span role="img" aria-label="sun">
            ☀️
          </span>
        </BasicButton>
        <BasicButton onClick={() => setWeather('rain')}>
          <span role="img" aria-label="rain">
            ☔️
          </span>
        </BasicButton>
        <BasicButton onClick={() => setWeather('snow')}>
          <span role="img" aria-label="snow">
            ❄️
          </span>
        </BasicButton>
      </div>
      <div className="packingList">
        <h1>You should take</h1>
        <Essentials leaveUk={leaveUk} />
        <BasicOutfits count={count} />
      </div>
    </div>
  )
}

export default App

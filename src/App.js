import React, { useState } from 'react'
import './App.css'

import BasicOutfits from './components/items/BasicOutfits'
import Essentials from './components/items/Essentials'

const App = () => {
  const [count, setCount] = useState(0)
  const [leaveUk, setLeaveUk] = useState()
  const [weather, setWeather] = useState('not sure')

  return (
    <div className="App">
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
        <button onClick={() => setLeaveUk(false)}>Staying in the UK</button>
        <button onClick={() => setLeaveUk(true)}>Going far away</button>

        <h3>How many nights will you be away for?</h3>
        <p>{count} nights</p>
        <button onClick={() => setCount(count - 1)}>-1 night</button>
        <button onClick={() => setCount(count + 1)}>+1 night</button>

        <h5>What weather are you expecting?</h5>
        <p>{weather}</p>
        <button onClick={() => setWeather('sun')}>
          <span role="img" aria-label="sun">
            ☀️
          </span>
        </button>
        <button onClick={() => setWeather('rain')}>
          <span role="img" aria-label="rain">
            ☔️
          </span>
        </button>
        <button onClick={() => setWeather('snow')}>
          <span role="img" aria-label="snow">
            ❄️
          </span>
        </button>
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

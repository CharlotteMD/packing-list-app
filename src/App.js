import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import './App.css'
import { H1, BasicButton, AnchorLink, EmojiSpan, Rotate } from './global-styles'

import BasicOutfits from './components/items/BasicOutfits'
import Essentials from './components/items/Essentials'

const CountText = styled.p`
  color: blue;

  ${(props) =>
    props.count &&
    props.count > 3 &&
    css`
      color: orange;
    `};
`

const App = () => {
  const [count, setCount] = useState(0)
  const [leaveUk, setLeaveUk] = useState()
  const [weather, setWeather] = useState('not sure')

  return (
    <div className="App">
      <H1 textColor="orange">Let's send you packing!</H1>
      <H1>Holiday time!</H1>
      <div className="questions">
        <p>Where are you going?</p>
        {!!leaveUk && (
          <p>
            <Rotate>
              <EmojiSpan ariaRef="leave-UK">🛫</EmojiSpan>
            </Rotate>
          </p>
        )}
        {!leaveUk && (
          <p>
            <EmojiSpan ariaRef="UK">🇬🇧</EmojiSpan>
          </p>
        )}
        <BasicButton textButton onClick={() => setLeaveUk(false)}>
          Staying in the UK
        </BasicButton>
        <BasicButton textButton onClick={() => setLeaveUk(true)}>
          Going far away
        </BasicButton>

        <h3>How many nights will you be away for?</h3>
        <CountText count={count}>{count} nights</CountText>
        <BasicButton textButton onClick={() => setCount(count - 1)}>
          -1 night
        </BasicButton>
        <BasicButton textButton onClick={() => setCount(count + 1)}>
          +1 night
        </BasicButton>

        <h5>What weather are you expecting?</h5>
        <p>{weather}</p>
        <BasicButton backgroundColor onClick={() => setWeather('sun')}>
          <EmojiSpan ariaRef="sun">☀️</EmojiSpan>
        </BasicButton>
        <BasicButton backgroundColor onClick={() => setWeather('rain')}>
          <EmojiSpan ariaRef="rain">☔️</EmojiSpan>
        </BasicButton>
        <BasicButton backgroundColor onClick={() => setWeather('snow')}>
          <EmojiSpan ariaRef="snow">❄️</EmojiSpan>
        </BasicButton>
      </div>
      <div className="packingList">
        <h1>You should take</h1>
        <Essentials leaveUk={leaveUk} />
        <BasicOutfits count={count} />
      </div>
      <BasicButton
        as="AnchorLink"
        href="https://www.skyscanner.net/news/tips/skyscanners-essential-packing-list"
      >
        See the list online
      </BasicButton>
      <AnchorLink href="https://www.charlottemdavies.co.uk">
        <EmojiSpan ariaRef="Charlotte Davies">👩🏻‍💻</EmojiSpan>
        Charly McDavies
      </AnchorLink>
    </div>
  )
}

export default App

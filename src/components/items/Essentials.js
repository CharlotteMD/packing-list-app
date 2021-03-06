import React from 'react'
import styled from 'styled-components'
import { ListItem } from '../../style/global-styles'

const Essentials = ({ leaveUk }) => {
  const internationalTravelItems = [
    'passport',
    'travel insurance',
    'boarding pass/tickets'
  ]

  const essentialItems = [
    'money/credit cards',
    'emergency contact details',
    'phone and other essential electronic devices',
    'chargers',
    'house keys',
    'medication'
  ]

  const EssentialItemsSt = styled(ListItem)`
    color: red;
    font-weight: bold;
  `

  return (
    <div>
      <ul>
        {!!leaveUk && (
          <div>
            {internationalTravelItems.map((i) => (
              <EssentialItemsSt key={i}>{i}</EssentialItemsSt>
            ))}
          </div>
        )}

        {essentialItems.map((i) => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </ul>
    </div>
  )
}

export default Essentials

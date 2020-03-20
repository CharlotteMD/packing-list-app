import React from 'react'

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

  return (
    <div>
      <ul>
        {!!leaveUk && (
          <div>
            {internationalTravelItems.map((i) => (
              <li>{i}</li>
            ))}
          </div>
        )}

        {essentialItems.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  )
}

export default Essentials

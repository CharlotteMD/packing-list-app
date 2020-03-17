import React, { useState } from "react";

const Essentials = () => {
  const [leaveUk, setLeaveUk] = useState(true);

  const internationalTravelItems = [
    "passport",
    "travel insurance",
    "boarding pass/tickets"
  ];

  const essentialItems = [
    "money/credit cards",
    "emergency contact details",
    "phone and other essential electronic devices",
    "chargers",
    "house keys",
    "medication"
  ];

  console.log(leaveUk);
  return (
    <div>
      <p>Where are you going?</p>
      <button onClick={() => setLeaveUk(false)}>Staying in the UK</button>
      <button onClick={() => setLeaveUk(true)}>Heading to Europe</button>
      <button onClick={() => setLeaveUk(true)}>Going far away</button>

      <ul>
        {!!leaveUk && (
          <div>
            {internationalTravelItems.map(i => (
              <li>{i}</li>
            ))}
          </div>
        )}

        {essentialItems.map(i => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default Essentials;

import React from "react";
// import Underwear from "./Underwear";

const BasicOutfits = ({ count }) => {
  const eveningWear = Math.floor(count / 3);
  const pyjamas = Math.ceil(count / 5);
  return (
    <div>
      <p>COUNT IS {count}</p>
      {count > 0 && (
        <ul>
          <li>
            {count} outfits
            {count > 3 && (
              <span>- bonus points if you can rewear something!</span>
            )}
          </li>
          <li>{count} underwear (dont forget socks!)</li>
          <li>{eveningWear} evening outfits</li>
          <li>{pyjamas} pairs of pyjamas</li>
          <li></li>
        </ul>
      )}
      {/* <Underwear count={count} /> */}
      {/* <Shoes /> */}
    </div>
  );
};

export default BasicOutfits;

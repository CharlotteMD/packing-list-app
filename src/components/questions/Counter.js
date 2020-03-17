import React, { useState } from 'react'
import BasicOutfits from '../BasicOutfits'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>How many nights will you be away for?</h3>
      <p>{count} nights</p>
      <button onClick={() => setCount(count - 1)}>-1 night</button>

      <button onClick={() => setCount(count + 1)}>+1 night</button>

      <BasicOutfits count={count} />
    </div>
  )
}

export default Counter

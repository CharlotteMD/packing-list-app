import React, { useState } from 'react'

const Counter = ({ counter: { title, message } }) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => setCount(count - 1)}>-1 night</button>

      <button onClick={() => setCount(count + 1)}>+1 night</button>
      <p>
        {count} {message}
      </p>
    </div>
  )
}

export default Counter

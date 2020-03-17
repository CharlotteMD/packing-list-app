import React, { useState } from 'react'

const Underwear = (props) => {
  const [woman, setWoman] = useState(false)
  const [sunshine, setSunshine] = useState(false)

  const bras = Math.ceil(props.count / 4)

  return (
    <div>
      <p>Are you a man or a woman?</p>
      <button onClick={() => setWoman(true)}>♀</button>
      <button onClick={() => setWoman(false)}>♂</button>

      {!!woman && (
        <div>
          <p>Are you expecting sun?</p>
          <button onClick={() => setSunshine(true)}>YES!</button>
          <button onClick={() => setSunshine(false)}>Not really..</button>
          <p>Take {bras} bras</p>
          {!!sunshine && (
            <p>
              Maybe some could be bikini tops ;){' '}
              <span>Don't forget strapless bras!</span>
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default Underwear

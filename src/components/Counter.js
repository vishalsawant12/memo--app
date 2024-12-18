import React, { useState } from 'react'
import Display from './Display'

function Counter() {
  let [Counter, setCounter] = useState(0)

  return (
    <div>

      <button onClick={() => { setCounter(Counter + 1) }}>{Counter}</button>
      <Display/>
    </div>
  )
}

export default Counter
import React, { memo, useRef, useState } from 'react'

function Display() {
    let useRefData=useRef(0)
    console.log(useRefData);
    
  return (
    <div>
        <h1>hello I am Display {useRefData.current++}</h1>
    </div>
  )
}

export default memo(Display) 
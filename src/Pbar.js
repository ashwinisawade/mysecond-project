import React from 'react'
import { useReducer, useState } from 'react'
function Pbar() {
  const [color1, color2] = useState({
    pbar1: false,
    pbar2: false
  })


  const handleClick = () => {
    console.log("This is the clickable button")
    color2({ ...color1, pbar1: true, pbar2: false })
  }
  console.log(color1, "dfsavb")
  const handleClick2 = () => {

    color2({ ...color1, pbar2: true, pbar1: false })
  }
  return (
    <div>


      <ProgressBar style={{
        width: '40%',
        height: '20px',margin:'20px auto' backgroundColor: color1.pbar1 == true ? "red" : "white"
      }} onClick={handleClick}
      > Click here</ProgressBar><br /><br />
      <button style={{ backgroundColor: color1.pbar2 == true ? "red" : "white" }} onClick={handleClick2}
      > Click me</button>
    </div>
  )
}

export default Pbar

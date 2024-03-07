import React, { useReducer, useState } from 'react'

function ClickButton() {
  const [color1, color2] = useState({ 
    Ashwini: false,
    shraddha:false
  })
  
    
    const handleClick = () => {
        console.log("This is the clickable button")
      color2({...color1,Ashwini:true,shraddha:false})
  }
  console.log(color1,"dfsavb")
  const handleClick2 = () => {
  
    color2({...color1,shraddha:true,Ashwini:false})
    }
  
  // const [count, dispatch] = useReducer(reducer, initialState);
  // const initialState = {color:"white"};
  // const reducer = [state, action] = () => {
  //   switch (action) {
  //     case 1:
  //       if (state == initialState)
  //       {
  //         return { color: "white" }
  //       }
  //     case 2:
  //     if(!State == initialState)
  //       {
  //        return (color: "red") 
  //         }
 
  //      default:
  //               return state

  //   }
  //  }
  
    return (
      <div>
        {/* using ternary operator */}
        {/* <button style={{ backgroundColor : color1 ? "white": "red"}} onClick={handleClick}>Click here</button> */}
        
        {/* using State */}
           <button style={{backgroundColor:color1.Ashwini== true?"red":"white" }} onClick={handleClick } 
        > Click here</button><br/><br/>
         <button style={{backgroundColor:color1.shraddha== true? "red" :"white"}} onClick={handleClick2}  
            > Click me</button>
         


         {/* <button style={{backgroundColor: color1 }} onClick={handleClick} 
        > Click me</button> */}

        {/* using useReducer */}
         {/* <button style={{ backgroundColor: state.color}} onClick={() => { dispatch(1) }} 
         > Click me</button>
 <button style={{ backgroundColor: state.color  }} onClick={() => { dispatch(2) }} > Click me</button> */}
        
    </div>
  )
          }

export default ClickButton
import React from 'react'

const Indexofmethod=()=> {
  const arr=["trrg","pgg","dfg","rtg"];
    const arrofObject =[
      {id:1,book:"js",price:"44"},
      {id:2,book:"rjs",price:"77"},
      {id:3,book:"css",price:"34"},
      {id:4,book:"rjs",price:"79"}
    ]
    let arrIndex=arr.indexOf("dfg");
    let arrObjectindex=arrofObject.map(obj=>obj.book).indexOf("rjs")
    console.log(arrObjectindex,"book")
    return(
      <div>
        <h1>Index of method</h1>
        <h2>{arrIndex}</h2>
      </div>
    )

  }
export default Indexofmethod

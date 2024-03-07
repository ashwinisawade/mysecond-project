import React, { useEffect, useState } from 'react'

const EgComp = () =>{
    const [myState,setMyState]= useState('shradha');
    useEffect(() =>{
        setMyState('pooja!');
        return ()=>{ 
          setMyState('shradha hello')
        }
    },[]);

console.log('component is mounted',myState);
  return (
    <div>
        <p>{myState}</p>
      
    </div>
  )
  }
export default EgComp; 

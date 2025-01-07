
import React from 'react'
import { useState,useRef } from 'react';
import ph from './assets/react.svg';

const Useref = () => {
  
    let[Count,setCount]=useState(0);
    let CountRef=useRef(0)
    let[image,setimage]=useState(false);
        let increment=()=>{
        // setCount(Count+1);
        // CountRef.current++;
        // console.log("State",Count);
        // console.log("REf",CountRef.current);
        
       setimage(true);
        
    }
    let decrement=()=>{
        setimage(false);
    }
    return (
    <div>   
        <div className='imageontrue'>
            {image && <img src={ph}/>}
        </div>
        <h1> count:{CountRef.current}</h1>
        <button onClick={increment}>+++</button>
        <button onClick={decrement} >---</button>
      
    </div>
  )
}

export default Useref

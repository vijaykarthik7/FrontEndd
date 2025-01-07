import React from 'react'
import { useContext } from 'react'
import{nameContext} from './App'
import { colorchange } from './App'
const Stomach = () => {
    let dog=useContext(colorchange)
  return (
    <div >
         <button onClick={dog}  >
Click</button> 
      <h1
      
      >HaveDinner&ensp;stomach{dog}</h1>

      <h1 style={dog}>cat</h1>
    </div>
  )
}

export default Stomach

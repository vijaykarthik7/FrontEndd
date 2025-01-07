import React from 'react'
import User from './User'
import CreateUser from'./CreateUser';
import UpdateUser from './UpdateUser';
import Delete from './Delete';
import {BrowserRouter,Route,Routes,Router} from "react-router-dom";
import './index.css'; 



const Apps = () => {
  return (
    <div>
     
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<User/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/update" element={<UpdateUser/>}></Route>
        <Route path="/delete" element={<Delete/>}></Route>
      </Routes>
      
      </BrowserRouter>
       </div>

  )
}

export default Apps

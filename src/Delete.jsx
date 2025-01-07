import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Delete = () => {
    const navigate=useNavigate();
    const[id,setid]=useState('');
    const deledte=(e)=>{
        e.preventDefault();
        axios.delete(`https://backenddemo-0792.onrender.com/api/user/deleteUser/${id}`).then(result=>{
            console.log("deleted");
            navigate('/');

        })
        .catch(err=>{console.log(err)});
    }
  return (
    <div>
      <h1>Delete Enter the id</h1>
      <form onSubmit={deledte}>
      <label>Id</label>
      <input type="text" onChange={(e)=>setid(e.target.value)}/>
      <button type="sumbit" >Delete</button>
      </form>
    </div>
  )
}

export default Delete

import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const UpdateUser = () => {
    const [id,setid]=useState('');
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [address,setaddress]=useState('');
    const update=(e)=>{
        e.preventDefault();
        axios.put(`https://backenddemo-0792.onrender.com/api/user/update/${id}`,{name,email,address}).then((result)=>{console.log("updateed")})
        .catch(err=>{console.log(err)});
    }
  return (
    <center>
    <div className='bc'> <h1>Update the User Details</h1>
    <form onSubmit={update}>
        <label>Id</label>
        <input type="text" onChange={(e)=>setid(e.target.value)}/>
        <div>
        <label>Name</label>
       <input type="text" onChange={(e)=>setname(e.target.value)}/></div>
       <div><label>Email</label>
       <input type="text"onChange={(e)=>setemail(e.target.value)}/></div>
       <div>  <label>Address</label>
       <input type="text" onChange={(e)=>setaddress(e.target.value)}/></div>
       <button type="submit">Sumbit</button>
     
    </form>
    </div>
    </center>
       
       
    
  );
}

export default UpdateUser

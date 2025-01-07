import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {
    const navigate = useNavigate();
  
       const [name,setname]=useState('');
       const [email,setemail]=useState('');
       const [address,setaddress]=useState('');
       

   const submit=(e)=>{
    e.preventDefault();
    axios.post('https://backenddemo-0792.onrender.com/api/user/fetch',{name,email,address}).then(result=>{
        console.log(result.data);
        navigate('/');
    })
    .catch(err=>{console.log(err)});
   }
  return (
    <div>
         
        <h1>Create the User Details</h1>
<form onSubmit={submit}>
    <div>
    <label>Name</label>
   <input type="text" onChange={(e)=>setname(e.target.value)}/></div>
   <div><label>Email</label>
   <input type="text" onChange={(e)=>setemail(e.target.value)}/></div>
   <div>  <label>Address</label>
   <input type="text" onChange={(e)=>setaddress(e.target.value)}/></div>
   <button type="submit" >Create </button>
 
</form>

    </div>
  )
}
export default CreateUser

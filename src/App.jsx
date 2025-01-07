// // // import {useState,useEffect} from 'react';
// // // function App(){
// // //     let[count,setCount]=useState(0)
// // //     useEffect(()=>{
// // //       console.log("value updated");
// // //       // return(()=>{
// // //       //   setCount(count+15);}  
// // //       // )
       
// // //     },[count])
// // //     return(
// // //         <div>
// // //             <h1> count : {count}</h1>
// // //             <button onClick={()=> setCount(count+1)}>increment</button>
// // //             <button onClick={()=> setCount(count-1)}>decrement</button>
// // //         </div>
// // //     )
// // // }
// // // export default App;
// // import React, { useState } from 'react'
// // import Hen from './Hen'
// // import{createContext}from"react";
// // export let nameContext=createContext();
// // export let colorchange=createContext();

// // const App = () => {
// // //   return (
// // //     <div>
// // //       <Hen name="water"/>
// // //     </div>//This is props drilling
// // // )
// // let [back,setback]=useState("true");
// // let increment=()=>{
 

  
// // }

// // return(
// //   <colorchange.Provider value={increment}>
// //     <Hen/>
// //   </colorchange.Provider>
// // )
// // }
// // export default App


// Conversation opened. 1 unread message.

// Skip to content
// Using Kongu Engineering College Mail with screen readers
// Trying to connect to Chat...
// If this issue persists, learn more
// 1 of 4,529
// (no subject)
// Inbox

// RAMPRADOP S 22CDR081
// 11:36 AM (3 minutes ago)
// to me



// --import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import './User.css'

// const User = () => {
//     const [user, setUser] = useState([ ])

//     useEffect(() => {
//         axios.get('http://localhost:3000/api/user/fetch')
//         .then((res) => {
//             setUser(res.data.users)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     },[])
//     return (
//         <div >
//             <h1>User</h1>
//             <Link to="/create">Create User</Link>
//             <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Address</th>
//                 </tr>
//                 {user.map((value) => (                        
//                     <tr>
//                         <td>{value.name}</td> 
//                         <td>{value.email}</td>
//                         <td>{value.address}</td>
//                         <td>
//                             <Link to="/updateUser">update</Link>
//                             <button>delete</button>
//                         </td>
//                     </tr> 
//                     )
//                 )}
//             </table>
//         </div>
//     )
// }

// export default User
// RAMPRADOP S
// 22CDR081
// STUDENT OF KEC

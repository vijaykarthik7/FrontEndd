import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
const User = () => {
    const [user, setuser] = useState([]);
    useEffect(() => {
        axios.get("https://backenddemo-0792.onrender.com/api/user/getdata")
            .then((res) => {
                console.log(res.data)
                setuser(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            
            <center>
                <h1>Users List</h1>
                 
            <table className='a'>
                <thead className='b'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Addres</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((uses) =>
                    (
                        <tr>

                            <td>{uses.name}</td>
                            <td>{uses.email}</td>
                            <td>{uses.address}</td>
                            <td>
                                <Link to="/update">update</Link>
                                <Link to="/delete">delete</Link>
                            </td>
                        </tr>

                    ))}
                </tbody>

            </table>
            <Link to="/create">Create</Link>

        </center>
        </div>
           
    )
}

export default User

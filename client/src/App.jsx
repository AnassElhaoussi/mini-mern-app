import React, { useState, useEffect } from "react";
import Axios from 'axios'


function App(){
    const [usersList, setUsersList] = useState([])

    useEffect(() => {   
        Axios.get('http://localhost:5000').then((response) => {
            setUsersList(response.data)
        })

        console.log(usersList);
    }, [])

    

    
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Users : </h1>
            <div style={{display: 'flex', gap: '10px', flexDirection: "column"}}>
                {usersList.map(user => (
                    <div className="">
                        <h1>User with id of : {user._id} </h1>
                        <h1>Name: {user.name}</h1>
                        <h1>Age : {user.age}</h1>
                        <h1>Username : {user.username}</h1>
                    </div>
                ))}
            </div>
            <input type="text" placeholder="Enter your name" />
            <input type="number" placeholder="Enter your age" />
            <input type="text" placeholder="Enter your username" />
            <button>Create User</button>
        </div>
    )
}


export default App
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
        <div>
            <h1>Users : </h1>
            {usersList.map(user => (
                <div>
                    <h1>{user.name}</h1>
                    <h1>{user.username}</h1>
                </div>
            ))}
        </div>
    )
}


export default App
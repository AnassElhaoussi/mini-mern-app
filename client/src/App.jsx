import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios'


function App(){
    const [usersList, setUsersList] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [username, setUsername] = useState('')
    const scroll = useRef()

    useEffect(() => {   
        Axios.get('http://localhost:5000/getUsers').then((response) => {
            setUsersList(response.data)
        }).catch(error => {
            alert('Something went wrong!')
        })

        console.log(usersList);
    }, [])

    
    const addNewUser = () => {
        Axios.post('http://localhost:5000/createUser', {
            name,
            age,
            username
        }).then(response => {
            if(name && age && username) setUsersList(
            users => 
            [...users, {id: response.data._id, name, age, username}])
        })

        setName('')
        setAge('')
        setUsername('')
    }

    
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
                        <div ref={scroll}></div>
                    </div>
                ))}
            </div>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value) } />
            <input type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value) } />
            <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={addNewUser}>Create User</button>
        </div>
    )
}


export default App
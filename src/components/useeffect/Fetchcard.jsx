import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getUser } from '../../helpers/getUser'


export const Fetchcard = () => {
    const [user,setUser]=useState(0)

    const updateUser = () =>{
        const id = Math.floor(Math.random()*10)+1
        getUser(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(newUser => setUser(newUser))
    }
    useEffect(()=>{
      console.log("Por useEffect")
    },[user])

  return (
    <div>
        <p>{user.name}</p> 
        <button onClick={updateUser}>Change User</button>
    </div>
  )
}

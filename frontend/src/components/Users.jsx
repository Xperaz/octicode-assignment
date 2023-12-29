import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';

const Users = () => {

  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      const data = await fetch('http://127.0.0.1:5000/api/users');
      
      const json = await data.json();
      setListOfUsers(json.users)
    } 

  return (
    <div className='flex flex-col md:flex-row md:flex-wrap gap-10 md:justify-center'>
      {listOfUsers.map((user) => (
        <div key={user.id} className='w-[300px] h-[400px] card-effect'>
        <Card {...user} />
      </div>
      ))}
    </div>
  )
}

export default Users

// banner 
// profile image
// "firstName": "Terry",
// "lastName": "Medhurst",

// "username": "atuny0",
// "bloodGroup": "A−",
//       "height": 189,
//       "weight": 75.4,
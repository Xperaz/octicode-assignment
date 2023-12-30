import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Users = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          const data = await fetch('http://127.0.0.1:5000/api/users');
          
          const json = await data.json();
          setListOfUsers(json.users)
          setFilteredUsers(json.users);
          setLoading(false);
      } 
      fetchData();
  }, []);

 // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredUsers.slice(indexOfFirstPost, indexOfLastPost);


  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      const filtred = listOfUsers.filter((user) => {
        return user.firstName.toLowerCase().includes(searchQuery.toLocaleLowerCase());
      });
        setFilteredUsers(filtred);
        setSearchQuery("");
        return;
    }
    else {
      setFilteredUsers(listOfUsers);
      setSearchQuery("");
    }
  }

  return (
    <>
    <div className='flex w-[70%]'>
      <input type="text" placeholder='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
          className='outline-none text-black w-full p-1 rounded-l-md' 
      />

      <button className='bg-[#ffd01a] p-[0.7rem] rounded-r-md' onClick={handleSearch}>Search</button>
    </div>
      {!loading ? (
        <>
          {filteredUsers.length === 0  ? (
            <p>User not found</p>
          ) : (
            <>
              <div className='flex flex-col md:flex-row md:flex-wrap gap-10 md:justify-center'>
              {currentPosts.map((user) => (
                <div key={user.id} className='w-[300px] h-[400px] card-effect hover:scale-105'>
                <Card {...user} />
              </div>
              ))}
            </div>
            <Pagination PostsPerPage={postsPerPage} totalPosts={filteredUsers.length} paginate={paginate} currentPage={currentPage} />
            </>
            )}
         </>
      ) : (
        <p>loading...</p>
      ) }
    </>
  )
}

export default Users

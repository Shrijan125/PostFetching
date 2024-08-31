import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      (data)=>{
        setPosts(data?.data)
      }
    ).catch((error)=>{
      console.log(error)
    });
  },[])
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-title">{post.title}</div>
          <div className="post-body">{post.body}</div>
        </div>
      ))}
    </div>
  )
}

export default App
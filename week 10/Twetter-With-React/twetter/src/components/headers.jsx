import React, { useState } from 'react';
import '../cssFiles/Headers.css'
import Posts from './posts';


function Headers() {
    const [value, setValue] = useState('');
    const [posts, setPosts] = useState([]);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    }
  
    const handleSubmit = (event) => {
      setPosts([...posts, value]);
      setValue(''); 
      event.preventDefault();
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Enter The Post:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
        <div className="posts-list">
          {posts.map((post, index) => (
            <Posts key={index} postContent={post} />
          ))}
        </div>
      </div>
    );
  }
  

export default Headers;

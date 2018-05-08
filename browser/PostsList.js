import React from 'react';

export default function PostsList ({ posts }) {
  return (
    <div>
      <h3>My Posts</h3>
      <ul>
        {
          posts.map((post, idx) => {
            return (
              <li key={idx}>
                <h4>{post.text}</h4>
                <br/>
                <span>Posted at: {post.time}</span>
                <br/>
              </li>
            );
          }) 
        }
      </ul>
    </div> 
  ); 
}

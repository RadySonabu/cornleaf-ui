import React, { useState, useEffect } from 'react'
import PostCard from './PostCard';

export default function ContentSection({children}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Function to fetch the list of posts from your API
        const fetchPosts = async () => {
          try {
            const response = await fetch('https://wj2e17sxka.execute-api.ap-southeast-1.amazonaws.com/dev/post/api2/posts/'); // Replace with your API endpoint
            const data = await response.json();
            console.log(data)
            setPosts(data); // Update the state with the fetched posts
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
    
        fetchPosts(); // Call the function to fetch posts when the component mounts
      }, []);
  return (
    <div>
        {posts.map((post) => (
            <div key={post.id} className='p-5 flex justify-center'>
                <PostCard author={post.author} content={post.content} imageLink={post.pictures}/>
            </div>
        ))}
    </div>
  )
}

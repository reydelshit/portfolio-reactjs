import './css/blog.css'

import { useEffect, useState } from "react"

const Blog = () => {
    const [ blog, setBlog ] = useState([])
    
    useEffect( async() => {
        let currentFetch = 'http://localhost:3000/posts'
        
        const res = await fetch(currentFetch)
        const blogPost = await res.json()
        setBlog(blogPost)
  
      }
  )

    // window.addEventListener('DOMContentLoaded', ()=> renderPosts());

    return ( 
        <div className="blog__container">
            <div className="blog__header">
            <h2 className='blog__title'>{blog.length} new post</h2>
            <a href='#'>view site code</a>
            </div>
           <div className="blog__father__container">
            {blog && blog.map(post => 
              <div className='blogs'>
                <h2>{post.title}</h2>
                <p>{post.body.slice(0, 40)}</p>
              </div>)}
           </div>
              

              {/* {blog.length > 7 ? <p>yoww</p> : <p>sss</p>} */}
              
        </div>
     );
}
 
export default Blog;

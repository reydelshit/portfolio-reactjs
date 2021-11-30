import './css/blog.css'

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'





const Blog = () => {
    const [ blog, setBlog ] = useState([])
    
    useEffect(() => {
    async function fetchData() {
    let currentFetch = 'http://localhost:3000/posts'
    const res = await fetch(currentFetch)
    const blogPost = await res.json()

    setBlog(blogPost)
   }
   fetchData()
    }, []);

      // async() => {
      //   
        
      //   const res = await fetch(currentFetch)
      //   const blogPost = await res.json()
      //   setBlog(blogPost)

    // window.addEventListener('DOMContentLoaded', ()=> renderPosts());

    return ( 
        <div className="blog__container">
            <div className="blog__header">
            <h2 className='blog__title'>{blog.length} POSTS <FontAwesomeIcon icon={ faWifi } className='blog__wifi'/></h2>
            <a href='https://github.com/reydelshit'
            title="Github"
            target="_blank"
            rel='noreferrer'
            >View site code   <FontAwesomeIcon icon={ faGithub }/>
            </a>
            </div>
           <div className="blog__father__container">
            {blog && blog.map(post => 
              <div className='blogs'>
                <span className='date'>{post.date}january 31, 2003</span>
                <h2>{post.title}</h2>
                <p>{post.body.slice(0, 40)}</p>
              </div>)}
           </div>         
        </div>
     );
}
 
export default Blog;

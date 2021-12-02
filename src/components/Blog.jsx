import './css/blog.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { TailSpin } from 'svg-loaders-react'




const query = `
    {
      user(username: "reydelshit") {
        publication {
          posts{
            slug
            title
            brief
            dateAdded
          }
        }
      }
    }
  `;
    // const [ blog, setBlog ] = useState([])

    // useEffect(() => {
    //   async function fetchData() {
    //   let currentFetch = 'https://reydelshit.github.io/portfolio-admin-panel/portfolio.json'
    //   const res = await fetch(currentFetch)
    //   const blogPost = await res.json()
  
    //   setBlog(blogPost.posts)
    //  }
    //   fetchData()
    //   }, []);

class Blog extends React.Component {

  state = {
        posts: [],
        loading: true
  }
  componentDidMount() {
    this.fetchPosts();
  }
fetchPosts = async () => {
  const response = await fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
  })
  const ApiResponse = await response.json();

  // console.log(ApiResponse.data.user.publication.posts);
  this.setState({ posts: ApiResponse.data.user.publication.posts, loading: false });


};


    render() {
      if (this.state.loading) return <div className="spinner"><TailSpin trokeOpacity=".125" /></div>;
      return(
        <div className='blog__container'>
            <div className='blog__header'>
              <h2 className='blog__title'>{this.state.posts.length} POSTS <FontAwesomeIcon icon={ faWifi } className='blog__wifi'/></h2>
              <a href='https://github.com/reydelshit'
                title="Github"
                target="_blank"
                rel='noreferrer'
                >View site code   <FontAwesomeIcon icon={ faGithub }/>
              </a>
            </div>
           <div className='blog__father__container'>
            {this.state.posts.map((post, index) => <div className='blog__holder'>
              <span className='post__date'>{new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
             }).format(new Date(post.dateAdded))}</span>
              <a key={index} href={`https://reydelp.hashnode.dev/${post.slug}`} >
              <h1>{post.title}</h1>
              </a>
              <p>{post.brief.slice(0, 50)}....</p>
              </div>
              )}
           </div>        
        </div>
      )
        
    };
}
 
export default Blog;

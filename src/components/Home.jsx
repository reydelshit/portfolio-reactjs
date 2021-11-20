import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook  } from '@fortawesome/free-brands-svg-icons'
// import {Link} from 'react-router-dom' 

const Home = () => {
    return ( 
        <section className="home__introduction" id="home">
        <div className="home__inside__container">
          <h1 className="pageTran hello">Hello.</h1>
          <h2 className="pageTran myName">
            I'm <span className="name">Reydel Ocon</span>.
          </h2>
          <p className="pageTran description">
            I've been interested in web development since my high school years,
            though I stopped for a while because I was addicted to video games
            and other stuff, but right now I am completely dedicated. Letsgo!
          </p>
          <div class="icons__yow">
              <a href="https://github.com/reydelshit" 
              className="soc__icons"
              title="Github"
              target="_blank">
            <FontAwesomeIcon icon={faGithub } />
              </a>
            <a
              href="https://facebook.com/reydelshit"
              className="soc__icons"
              title="Facebook"
              target="_blank"
              >
            <FontAwesomeIcon icon={ faFacebook } />
              </a>
          </div>
        </div>
        <div className="image__container">
          {/* <img src="./assets/wea.png" alt="yoww"> */}
        </div>
        </section>
     );
}
 
export default Home;
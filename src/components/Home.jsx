
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook  } from '@fortawesome/free-brands-svg-icons'
import { LightSpeed, Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';


const Home = () => {

    return ( 
        <section className="home__introduction" id="home">
              <div className="home__inside__container">
                <LightSpeed left>
                  <h1 className="hello">Hello.</h1>
                </LightSpeed>  
                <LightSpeed left delay={250}>
                  <h2 className="myName">
                    I'm <span className="name">Reydel Ocon</span>.
                  </h2>
                  </LightSpeed> 
               <LightSpeed right delay={350}>
                <p className="description">
                  I've been interested in web development since my high school years,
                  though I stopped for a while because I was addicted to video games
                  and other stuff, but right now I am completely dedicated. Lets go!
                </p>
                </LightSpeed>
                <div class="icons__yow">
                <Bounce bottom>
                    <a href="https://github.com/reydelshit" 
                    className="soc__icons"
                    title="Github"
                    target="_blank"
                    rel='noreferrer'>
                      <FontAwesomeIcon icon={faGithub } />
                    </a>
                  <a
                    href="https://facebook.com/reydelshit"
                    className="soc__icons"
                    title="Facebook"
                    target="_blank"
                    rel='noreferrer'
                    >
                        <FontAwesomeIcon icon={ faFacebook } />
                    </a>  
                    </Bounce>
                </div>
              </div>
              <div className="blog__container">      
              </div>
              
        </section>
     );
}
 
export default Home;
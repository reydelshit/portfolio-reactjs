import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVuejs, faHtml5, faSass, faNodeJs, faGitAlt, faFigma, faJs  } from '@fortawesome/free-brands-svg-icons'
import './css/techs.css'
import { LightSpeed, Rotate } from 'react-reveal'

const Skills = () => {
    return ( 
        
    <div className="techs">
      <div className="techs__container">
        <div className="techs__header">
        <LightSpeed left>
          <h2>Techs I've worked with</h2>
        </LightSpeed>
        <LightSpeed right>
          <p>Here are some of the technologies I have used in my projects</p>
          </LightSpeed>
        </div>
        <div className="techss">
          <div className="techs__skill">
            <LightSpeed left>
                <div className="techsBro one">
                    <FontAwesomeIcon icon={ faHtml5 } className='icons icons__techs'/>
                    <span className="tech__skill__title">HTML / CSS / Javascript</span>
                    <span className="tech__subtitle">Fundamental Web Development</span>
                </div>
                <div className="techsBro two">
                  <FontAwesomeIcon icon={ faSass } className='icons icons__techs'/>
                    <span className="tech__skill__title">SASS / Tailwind</span>
                    <span className="tech__subtitle">Frontend styling</span>
                </div>
                <div className="techsBro three">
                  <FontAwesomeIcon icon={ faNodeJs } className='icons icons__techs'/>
                    <span className="tech__skill__title">Node JS</span>
                    <span className="tech__subtitle">Backend Web Development</span>
                </div>
            </LightSpeed>

            <LightSpeed right>
            <div className="techsBro four">
              <FontAwesomeIcon icon={ faGitAlt } className='icons icons__techs'/>
              <span className="tech__skill__title">Git / Github</span>
              <span className="tech__subtitle">Version Control</span>
            </div>
            <div className="techsBro five">
            <FontAwesomeIcon icon={ faFigma } className='icons icons__techs'/>
              <span className="tech__skill__title">Figma</span>
              <span className="tech__subtitle">UI/UX Design</span>
            </div>
            <div className="techsBro six">
            <FontAwesomeIcon icon={ faJs } className='icons icons__techs'/>
              <span className="tech__skill__title">TypeScript</span>
              <span className="tech__subtitle">Software Development</span>
            </div>
            </LightSpeed>
            <Rotate top left>
            <div className="techsBro seven">
              <FontAwesomeIcon icon={ faVuejs } className='icons icons__techs'/>
              <span className="tech__skill__title">React JS / Vue JS</span>
              <span className="tech__subtitle">JS Frameworks</span>
            </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>

     );
}
 
export default Skills;
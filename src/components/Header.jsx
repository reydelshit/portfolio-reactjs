import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { Bounce } from 'react-reveal'
import Bulb from './css/ass/bulb.svg'
import Moon from './css/ass/moon.svg'

const Header = () => {

  const [ menu, setMenu ] = useState(false)
  const [ bg, setBg ] = useState(false)

    const changeBg = () => {

        bg ? setBg(false) : setBg(true)

        if(setBg === false) {
          document.body.classList.toggle('darkmode')
        } else {
          document.body.classList.toggle('darkmode')
        }

    }
    const menuBar = () => {
      menu ? setMenu(false) : setMenu(true)

    }

    return ( 
        <header>
             <nav className="navigation">
             <button className="hamburger" onClick={menuBar}>
               { menu ? <FontAwesomeIcon icon={ faTimes } /> :  <FontAwesomeIcon icon={ faBars } />}
              </button>
              <Bounce left>
              <div className={ menu ? "renderMenu" : "menu"}>
                <Link to='/' onClick={() => setMenu(false)}>home</Link>
                <Link to='/projects' onClick={() => setMenu(false)}>projects</Link>
                <Link to='/blog' onClick={() => setMenu(false)}>blogs</Link>
                <Link to='/techs'onClick={() => setMenu(false)}>techs</Link>
                <Link to='/contact'onClick={() => setMenu(false)}>contact</Link>
            </div>
            </Bounce>
            <button onClick={changeBg}>
               { bg ? <img src={ Moon } alt='moon' className="off"/> :  <img src={Bulb} alt='bulb' className="on" />}
              </button>
        </nav>
        </header>
     );
}
 
export default Header;
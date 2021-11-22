import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const [ menu, setMenu ] = useState(false)



    const changeBg = () => {
        document.body.classList.toggle('darkmode')
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
              <div className={ menu ? "renderMenu" : "menu"}>
                <Link to='/'>home</Link>
                <Link to='/projects'>projects</Link>
                <Link to='/skills'>techs</Link>
                <Link to='/contact'>contact</Link>
            </div>
          <input type="checkbox" className="switch" onClick={changeBg} />
        </nav>
        </header>
     );
}
 
export default Header;
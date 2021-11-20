

const Header = () => {

  // const darkMode = document.querySelector('#switch__dark')

  //   darkMode.addEventListener('click', (y) => {
  //       document.body.classList.toggle('darkmode')
  //   })

    const changeBg = (y) => {
        document.body.classList.toggle('darkmode')
    }

    return ( 
        <header>
             <nav className="navigation">
          <input type="checkbox" className="switch" onClick={changeBg} />
        </nav>
        </header>
     );
}
 
export default Header;
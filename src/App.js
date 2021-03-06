import Home from './components/Home'
import Header from './components/Header'
import Projects from './components/Projects'
import Techs from './components/Techs'
import Contact from './components/Contact'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
    return(
            <div className='App'>
            <Router>
                 <Header/>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/projects' element={<Projects/>}/>
                        <Route exact path='/techs' element={<Techs/>}/>
                        <Route exact path='/contact' element={<Contact/>}/>
                    </Routes>
                </Router>
            </div>
            
           
    )
}

export default App;
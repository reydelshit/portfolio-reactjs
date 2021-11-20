import Home from './components/Home'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Separator from './components/Separator'
import Footer from './components/Footer'

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
    return(
            <div className='App'>
            <Header/>
            <Home/>
            <Projects/>
            <Separator/>
            <Skills/>
            <Separator/>
            <Contact/>
            <Separator/>
            <Footer/>
            
            </div>
    )
}

export default App
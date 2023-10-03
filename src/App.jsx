import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('index')

  let content = null

  if (activeLink === 'index') {
    content = <Home setActiveLink={setActiveLink}/>
  } else if (activeLink === 'about') {
    content = <About />
  } else if (activeLink === 'projects') {
    content = <div>tite</div>
  } else if (activeLink === 'contact') {
    content = <Contact />
  }


  return (
    <>
      <header id='header'>
        <ul>
          <li className="link" ><button onClick={() => setActiveLink('index')}>Home</button></li>
          <li className="link" ><button onClick={() => setActiveLink('about')}>About</button></li>
          <li className="link" ><button onClick={() => setActiveLink('projects')}>Projects</button></li>
          <li className="link" ><button onClick={() => setActiveLink('contact')}>Contact</button></li>
        </ul>
      </header>
      <div id="content">
        {content}
      </div>
      <footer id="footer">© 2023 Designed and coded by Enzo Coloquio</footer>
    </>
  )
}

export default App

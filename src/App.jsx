import Navigation from './components/NavbarHamburguer.jsx'
import ArrowUp from './components/ArrowUp.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/Home.jsx'
import SobreMi from './pages/SobreMi.jsx'
import Footer from './components/Footer.jsx'
import Sesiones from './pages/Sesiones.jsx'
import Contacto from './pages/Contacto.jsx'




function App() {

  return (
    <>
      <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobremi' element={<SobreMi/>}/>
            <Route path='/sesiones' element={<Sesiones/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
          <Footer/>
          <ArrowUp/>
      </BrowserRouter>

    </>
  )
}

export default App

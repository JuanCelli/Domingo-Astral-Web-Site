import Navigation from './components/NavbarHamburguer.jsx'
import ArrowUp from './components/ArrowUp.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/home.jsx'
import SobreMi from './pages/SobreMi.jsx'




function App() {

  return (
    <>
      <Navigation></Navigation>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobremi' element={<SobreMi/>}/>
        </Routes>
      </BrowserRouter>
      <ArrowUp></ArrowUp>

    </>
  )
}

export default App

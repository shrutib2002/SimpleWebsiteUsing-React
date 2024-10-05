
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'


import { BrowserRouter,Routes , Route } from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Login' element={<Login/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>

      
    </>
  )
}

export default App

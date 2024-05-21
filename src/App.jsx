import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Pages/Header'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import More from './Components/More'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/more' element={<More/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App

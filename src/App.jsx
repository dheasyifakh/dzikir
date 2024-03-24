import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DzikirDetail from './pages/dzikir/DzikirDetail'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path=':time' element={<DzikirDetail/>}/>
      </Routes>
    </div>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* Header */}
      <Header/>
      <Routes>
        {/* Path for Landing (baseURL: http://localhost:5173/ ) ,Home (http://localhost:5173/home), History (http://localhost:5173/history ) */}
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
      {/* Footer */}
      <Footer/>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Womens } from './pages/Women'
import { Mens } from './pages/Mens'
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Mens" element={<Mens />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

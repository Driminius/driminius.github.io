import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layouts/MainLayout'
import ShopLayout from './layouts/ShopLayout'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ShopHomePage from './projects/shopping/shopping-pages/ShopHomePage'
import ContactMePage from './pages/ContactMePage'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />}/>
          <Route path='/portfolio' element={<PortfolioPage />}/>
          <Route path='contact-me' element={<ContactMePage />} />
        </Route>
      </Routes>

      <Routes>
        <Route path='/projects/shop' element={<ShopLayout />}>
          <Route path='/projects/shop/home' element={<ShopHomePage />}>
          </Route>
        </Route>
      </Routes>
     
    </Router>  
  )
}

export default App

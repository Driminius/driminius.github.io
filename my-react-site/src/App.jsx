import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import ShopLayout from './projects/shopping/shopping-layouts/ShopLayout'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ShopHomePage from './projects/shopping/shopping-pages/ShopHomePage'
import ContactMePage from './pages/ContactMePage'
import ClothArticleLayout from './projects/shopping/shopping-layouts/ClothArticleLayout'
import clothesData from '../clothes.json'
import ClothArticle from './projects/shopping/shopping-components/ClothArticle'



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
        <Route path='/projects/shop/' element={<ShopLayout />}>
          <Route path='/projects/shop/home' element={<ShopHomePage />} />
          <Route path='/projects/shop/home/:id' element={<ClothArticleLayout list={clothesData}/>} />
        </Route>
      </Routes>
     
    </Router>  
  )
}

export default App

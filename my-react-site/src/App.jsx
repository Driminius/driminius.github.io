import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layouts/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />} />
      </Routes>
      <h1 className='text-3xl font-bold underline'>Adrian Domingo</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis ratione distinctio omnis ullam tempora consequuntur necessitatibus quod quia praesentium, ipsam cum iure cumque iusto alias facere voluptas corporis laudantium.</p>

    </Router>  
  )
}

export default App

import { useState } from 'react'

import './App.css'

import Shop from './component/Shop/Shop'
import Header from './component/Header/Header'

function App() {
  const [count, setCount] = useState([])

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
     
    </div>
  )
}

export default App

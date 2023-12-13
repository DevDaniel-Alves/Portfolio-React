import { useState } from 'react'
import TopPage from './components/topPage/topPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopPage/>
    </>
  )
}

export default App

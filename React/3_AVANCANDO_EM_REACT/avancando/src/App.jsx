import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - Imagem em assets
import praca from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Avancando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt='Alguma imagem' />
      {/* 2 - imagem em assets*/}
      <img src='./assets/img2.jpg' alt='' />
    </div>
  )
}

export default App

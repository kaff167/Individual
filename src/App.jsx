import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nama, setNama] = useState('Kaffa')

  function Counting(count){
    return setCount(count + 1)
  }


  function kurang(count){
    return setCount(count -1)
  }

  return (
    <>
     <div className="halow">
      <h1>{nama} ganteng</h1>
      <p>Angka {count}</p>
     </div>
     <div className="btn" style={{display: 'flex', gap: '2rem', width: '100%'}}>
      <button onClick={() => Counting(count)}>
        + Angka
      </button>
      <button onClick={() => kurang(count)}>
        - Angka
      </button>
     </div>
    </>
  )
}

export default App

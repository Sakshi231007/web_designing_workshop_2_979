import { useState } from 'react'
import './App.css'
import StudentCard from './studentCard'

function App() {

  return (
    <>
      <div>
        <h1 style={{ color: 'white' }}>Welcome to CSE-27 in React</h1>
        <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>This is my first React app!</p>
        <br />
        <br />
        <StudentCard name="Alice" age={20} marks={85} />
        <StudentCard name="Bob" age={22} marks={90} />
        <StudentCard name="Charlie" age={19} marks={78} />
      </div>
    </>
  )
}

export default App

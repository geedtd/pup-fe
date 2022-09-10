import React, { useState } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        React Puppies CRUD
        <nav>
          <NavLink exact='true' to='/'>Puppy List</NavLink>
          <NavLink className='m-left' exact='true' to='/add'>Add Puppy</NavLink>
        </nav>
      </header>
      <main>
        
      </main>
    </div>
  )
}

export default App
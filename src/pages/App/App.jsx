import React, { useState } from 'react'
import { Route, NavLink, Routes } from 'react-router-dom'
import AddPuppy from '../AddPuppy/AddPuppy'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState([])

  const handleAddPuppy = newPuppyData => {
    setPuppies([...puppies, newPuppyData])
  }

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
      {/* <AddPuppy/> */}
      <Routes>
        <Route  path='/add' element={<AddPuppy handleAddPuppy={handleAddPuppy}/>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App
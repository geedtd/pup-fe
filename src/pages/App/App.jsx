import React, { useEffect, useState } from 'react'
import { Route, NavLink, Routes, navigate, useNavigate } from 'react-router-dom'
import AddPuppy from '../AddPuppy/AddPuppy'
import * as puppyService from '../../services/puppies'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    puppyService.getAll()
    .then(allPuppies => setPuppies(allPuppies))
  },[])

  const handleAddPuppy = async newPuppyData => {
    const newPuppy = await puppyService.create(newPuppyData)
    setPuppies([...puppies, newPuppy])
    navigate('/')
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
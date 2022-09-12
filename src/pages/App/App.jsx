import React, { useEffect, useState } from 'react'
import { Route, NavLink, Routes, useNavigate } from 'react-router-dom'
import AddPuppy from '../AddPuppy/AddPuppy'
import PuppyList from '../PuppyList/PuppyList'
import EditPuppy from '../EditPuppy/EditPuppy'
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

  const handleUpdatePuppy = updatedPuppyData => {
    puppyService.update(updatedPuppyData)
    .then(updatedPuppy => {
      const newPuppiesArray = puppies.map(puppy => 
        puppy._id === updatedPuppy._id ? updatedPuppy : puppy
      )
      setPuppies(newPuppiesArray)
			navigate('/')
    })
  }

  const handleDeletePuppy = id => {
    puppyService.deleteOne(id)
    .then(setPuppies(puppies.filter(puppy => puppy._id !== id)))
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
      <Routes>
        <Route exact path='/edit' element={<EditPuppy handleUpdatePuppy={handleUpdatePuppy}/>} />
        <Route path='/' element={<PuppyList puppies={puppies} handleDeletePuppy={handleDeletePuppy}/>} />
        <Route  path='/add' element={<AddPuppy handleAddPuppy={handleAddPuppy}/>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App
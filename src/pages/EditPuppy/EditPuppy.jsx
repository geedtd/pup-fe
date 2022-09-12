import React, {useState, useRef, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

function EditPuppy(props) {

    const location = useLocation()
    console.log(location.state);
    const [formData, setFormData] = useState(location.state.puppy)
    const [validForm, setValidForm] = useState(true)
    const formElement = useRef()

    useEffect(() => {
        formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
    },[formData])

    const handleChange = evt => {
        setFormData({...formData, [evt.target.name] : evt.target.value})
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.handleUpdatePuppy(formData)
    }

    return (
        <>
            <h1>Edit Puppy</h1>
            <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name-input" className='form-label'>
                        Puppy's Name (required)
                    </label>
                    <input 
                    type="text"
                    className='form-control'
                    id='name-input'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor="age-input" className='form-label'>
                        Puppy's Breed (required)
                    </label>
                    <input 
                    type="text" 
                    name="breed" 
                    id="breed-input" 
                    className='form-control'
                    value={formData.breed} 
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="age-input" className='form-label'>
                        Puppy's Age
                    </label>
                    <input 
                    type="number" 
                    name="age" 
                    id="age-input" 
                    value={formData.age}
                    onChange={handleChange}
                    className='form-control'
                    />
                </div>
                <div className="d-grid mb-3">
                    <button
                    type='submit'
                    className='btn btn-primary btn-fluid'
                    disabled={!validForm}
                    >
                        Save Puppy
                    </button>
                </div>
                <div className="d-grid">
                    <Link to='/' className='btn btn-danger btn-fluid' >
                        Cancel
                    </Link>
                </div>
            </form>
        </>
    )
}

export default EditPuppy
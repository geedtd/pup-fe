import React from 'react'

function AddPuppy(props) {
    return (
        <>
            <h1>Add Puppy</h1>
            <form autoComplete='off' >
                <div className="form-group mb-3">
                    <label htmlFor="name-input" className='form-label'>
                        Puppy's Name (required)
                    </label>
                    <input 
                        type="text"
                        className='form-control'
                        id='name-input'
                        name='name'
                        required
                    />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="breed-input" className='form-label'>
                        Puppy's Breed (required)
                    </label>
                    <input 
                        type="text"
                        className='form-control'
                        id='breed-input'
                        name='breed'
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="age-input" className='form-label'>
                        Puppy's Age
                    </label>
                    <input 
                    type="number" 
                    name="age" 
                    id="age-input" 
                    className='form-control' 
                    />
                </div>
                <div className="d-grid">
                    <button
                    type='submit'
                    className='btn btn-primary btn-fluid'
                    >Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddPuppy
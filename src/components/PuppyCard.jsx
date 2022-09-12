import React from 'react'
import { Link } from 'react-router-dom'

const PuppyCard = ({puppy, randDogImgId, handleDeletePuppy}) => {
    // const {name, breed, age } = puppy
    return (
        <div className='card'>
            <img src={`https://picsum.photos/id/${randDogImgId}/640/480`} 
            alt="A happy pup"
            className='card-img-top'
            />
            <div className="card-body">
                <h2 className="card-text">Puppy Name: {puppy.name}</h2>   
                <p className="card-text">A {puppy.age}-yeard old {puppy.breed}</p>
            </div>
            <div className="card-footer">
                <Link
                    className='btn btn-sm btn-danger m-left' 
                    to={{
                        pathname: '/edit',
                    }}
                    state={puppy = {puppy}}
                >
                Edit
                </Link>
                <button 
                className='btn btn-sm btn-danger m-left'
                onClick={() => handleDeletePuppy(puppy._id)}
                >
                    Delete
                </button>
            </div>
        </div>
        )
}

export default PuppyCard
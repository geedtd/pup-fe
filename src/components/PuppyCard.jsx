import React from 'react'

const PuppyCard = ({puppy}) => {
    const {name, breed, age } = puppy
    return (
        <div className='card'>
            <div className="card-body">
                <h2 className="card-text">Puppy Name: {name}</h2>   
                <p className="card-text">A {age}-yeard old {breed}</p>
            </div>
        </div>
        )
}

export default PuppyCard
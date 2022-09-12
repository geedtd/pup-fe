import React from 'react'
import styles from './PuppyList.module.css'

function PuppyList(props) {

    return (
        <>
            <h1>Puppy List</h1>
            <div className={styles.container}>
                {props.puppies.map(puppy => (
                    <div key={puppy._id}>
                        <p>Puppy Name: {puppy.name}</p>
                        <p>Puppy Breed: {puppy.breed}</p>
                        <p>Puppy Age: {puppy.age}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PuppyList
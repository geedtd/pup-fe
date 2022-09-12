import React from 'react'
import styles from './PuppyList.module.css'
import PuppyCard from '../../components/PuppyCard'

function PuppyList(props) {

    return (
        <>
            <h1>Puppy List</h1>
            <div className={styles.container}>
                {props.puppies.map(puppy => (
                    <PuppyCard key={puppy._id} puppy={puppy} />
                ))}
            </div>
        </>
    )
}

export default PuppyList
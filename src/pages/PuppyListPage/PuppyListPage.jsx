import React from 'react'
import './PuppyListPage.css'
import PuppyCard from '../../components/PuppyCard/PuppyCard'

function PuppyListPage(props){
  return (
    <>
      <h1>Puppy List</h1>
      <div className='PuppyListPage-grid'>
        {props.puppies.map(puppy =>
          <PuppyCard 
            puppy={puppy}
            key={puppy._id}
            handleDeletePuppy={props.handleDeletePuppy}
          />
        )}
      </div>
    </>
  )
}

export default PuppyListPage
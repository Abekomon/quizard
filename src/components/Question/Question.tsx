import React from 'react'
import './Question.css'

const Question: object = () => {
  return (
    <div className='card-container'>
      <h3 className='question'></h3>
      <p className='answer hidden'></p>
      <button className='fav-btn'>Add To Favorites</button>
    </div>
  )
}

export default Question
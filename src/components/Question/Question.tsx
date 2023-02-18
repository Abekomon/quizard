import React from 'react'
import './Question.css'

const Question: React.FunctionComponent<any> = ({ question, answer, id }) => {
  return (
    <div className='card-container'>
      <h3 className='question'>{question}</h3>
      <p className='answer hidden'>{answer}</p>
      <button className='fav-btn'>Add To Favorites</button>
    </div>
  )
}

export default Question
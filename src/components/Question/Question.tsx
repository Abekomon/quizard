import React from 'react'
import './Question.css'



const Question: React.FunctionComponent<any> = ({ question, answer, addFavorite, id, deleteFav } ) => {
  return (
    <div className='card-container'>
      <h3 className='question'>{question}</h3>
      <p className='answer hidden'>{answer}</p>
      {document.URL === "http://localhost:3000/" ? 
      <button className='fav-btn' onClick={() => addFavorite(id)}>Add To Favorites</button> : <button onClick={() => deleteFav(id)}>Remove</button>
      }
    </div>
  )
}

export default Question
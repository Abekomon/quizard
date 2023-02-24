import React from 'react'
import './Question.css'



interface QuestionProps {
  question: string;
  answer: string;
  addFavorite?: (id: number) => void;
  deleteFav?: (id: number) => void;
  id: number;
}

const Question: React.FC<QuestionProps> = ({ question, answer, addFavorite, deleteFav, id }) => {
  return (
    <div className='card-container'>
      <h3 className='question'>{question}</h3>
      <p className='answer hidden'>{answer}</p>
      {document.URL === "http://localhost:3000/quiz" ? 
      <button className='fav-btn' data-cy={`button-${id}`} onClick={() => addFavorite && addFavorite(id)}>Add To Favorites</button> : <button  data-cy={`button-${id}`} onClick={() => deleteFav && deleteFav(id)}>Remove</button>
      }
    </div>
  )
}

export default Question
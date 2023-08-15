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
  const [visible, setVisible] = React.useState(false);
  return (
    <div className='card-container'>
      <h3 className='question'>{question}</h3>
      {!visible && <button className='show-answer' onClick={() => setVisible(true)}>Show Answer</button>}
      {visible && <p className='answer'>{answer}</p>}
      {(document.URL === "http://localhost:3000/quiz" || document.URL === 'https://quizard-ten.vercel.app/quiz')? 
      <button className='fav-btn' data-cy={`button-${id}`} onClick={() => addFavorite && addFavorite(id)}>Add To Favorites</button> : <button  data-cy={`button-${id}`} onClick={() => deleteFav && deleteFav(id)}>Remove</button>
      }
    </div>
  )
}

export default Question

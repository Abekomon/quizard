import Question from '../Question/Question'
import './Favorites.css'
import { Link } from 'react-router-dom'

const Favorites: React.FunctionComponent<any> = props => {
  const cards: Array<any> = props.questions.map((
    item: {
      question: string,
      answer: string,
      id: number
    }, index: number) => {
    return (
      <Question
      question={item.question}
      answer={item.answer}
      id={item.id}
      key={index} 
      deleteFav={props.deleteFav}
      />
    )
  })

  return(
    <>
    <nav>
      <Link to="/quiz"><h3 className='quiz-link'>Back To Quiz</h3></Link>
      <Link to='/'><h3 className='back-link'>Back To Home</h3></Link>
    </nav>
      <div className='quiz-container'>
        {cards}
      </div>
    </>
  )
}

export default Favorites
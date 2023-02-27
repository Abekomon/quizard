import Question from '../Question/Question'
import {Link} from 'react-router-dom'
import './Quiz.css'

const Quiz: React.FunctionComponent<any> = props => {
const makeCards: Array<any> = props.questions.map((
  item: {
    question: string,
    correct_answer: string,
    id: number
  }) => {
  return (
    <Question
    question={item.question}
    answer={item.correct_answer}
    id={item.id}
    key={item.id} 
    addFavorite={props.addFavorite}
    />
  )
})

return (
  <div className='quiz-page'>
  <Link to="/" className="home-link">
    <h1 className="heading">Quizard</h1>
  </Link>
  <nav>
    <Link to="/favorites"><h3 className='favorites-link'>See Favorites!</h3></Link>
    <Link to="/"><h3 className='back-link'>Back To Home</h3></Link>
  </nav>
    <div className='quiz-container'>
      {makeCards}
    </div>
  </div>
)
}

export default Quiz
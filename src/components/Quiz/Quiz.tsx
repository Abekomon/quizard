import Question from '../Question/Question'
import {Link} from 'react-router-dom'
import './Quiz.css'


const Quiz: React.FunctionComponent<any> = props => {
const makeCards: Array<any> = props.questions.map((
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
    addFavorite={props.addFavorite}
    />
  )
})

return (
  <>
    <Link to="/favorites"><h3 className='favorites-link'>See Favorites!</h3></Link>
    <div className='quiz-container'>
      {makeCards}
    </div>
  </>
)

}


export default Quiz
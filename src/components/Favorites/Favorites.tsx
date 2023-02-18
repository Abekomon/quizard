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
      />
    )
  })

  return(
    <>
      <Link to='/'><h3 className='back-link'>Back to Home!</h3></Link>
      <div className='favorites-container'>
        {cards}
      </div>
    </>
  )
}

export default Favorites
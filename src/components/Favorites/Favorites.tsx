import Question from '../Question/Question'
import './Favorites.css'

const Favorites: React.FunctionComponent<any> = props => {
  const cards: Array<any> = props.questions.map((
    item: {
      question: string,
      answer: string
    }, index: number) => {
    return (
      <Question
      question={item.question}
      answer={item.answer}
      id={Date.now()}
      key={index} 
      />
    )
  })

  return(
    <div className='favorites-container'>
      {cards}
    </div>
  )
}

export default Favorites
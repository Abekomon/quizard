import Question from '../Question/Question'
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
  <div className='quiz-container'>
    {makeCards}
  </div>
)

}


export default Quiz
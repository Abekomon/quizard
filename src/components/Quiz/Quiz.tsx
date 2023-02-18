import Question from '../Question/Question'
import './Quiz.css'



const Quiz: React.FunctionComponent<any> = props => {
const makeCards: Array<any> = props.questions.map((
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

return (
  <div className='quiz-container'>
    {makeCards}
  </div>
)

}


export default Quiz
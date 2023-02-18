import Question from '../Question/Question'
import './Quiz.css'



const Quiz: React.FunctionComponent<any> = props => {
const makeCards: any = props.questions.map((item: any, index: any)  => {
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
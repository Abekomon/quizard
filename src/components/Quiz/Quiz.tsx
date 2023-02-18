import Question from '../Question/Question'
import './Quiz.css'



const Quiz: React.FunctionComponent<any> = props => {
const makeCards: any = props.questions.map((item: any)  => {
  return (
    <Question
    question={item.question}
    answer={item.answer}
    id={Date.now()}
    key={item.id} 
    />
  )
})

return (
  <div>
    {makeCards}
  </div>
)

}


export default Quiz
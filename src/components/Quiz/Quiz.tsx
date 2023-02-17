import React from 'react'
import './Quiz.css'
import Question from '../Question/Question'

interface QuizQuestions {
  category: string,
  question: string,
  answer:string
}


const Quiz:any = ({category, question, answer}: QuizQuestions ) => {
    // const allQuestions: object = props.quizData.map(single => {
    //   return (
    //     <Question 
    //     question={single.question}
    //     />
    //   )

}


export default Quiz
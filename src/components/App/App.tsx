import React, { Component } from 'react';
import './App.css';
import { getApiData } from '../../apiCalls';
import  Quiz  from '../Quiz/Quiz';

class App extends Component {
  constructor(props:any) {
    super(props)
    this.state = {
      quizData: [], 
      favorites: [],
      error: {}
    }
  }

  componentDidMount() {
    getApiData().then((data:object) => {
      this.setState({quizData: data})
    })
    .catch((error:object) => {
      this.setState({error:error})
    })
  }


  render() {
    return (
      <main>
        <h1>Quizard</h1>
        <Quiz questions={this.state.quizData}/>
      </main>
    );
  }
}
export default App;

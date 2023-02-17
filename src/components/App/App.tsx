import React, { Component } from 'react';
import './App.css';
import { getApiData } from '../../apiCalls';

class App extends Component {
  constructor(props:any) {
    super(props)
    this.state = {
      quizData: [], 
      error: {}
    }
  }

  componentDidMount() {
    getApiData().then((data:any) => {
      this.setState({quizData: data})
    })
    .catch((error:object) => {
      this.setState({error:error})
    })

  }


  render() {
    return (
      <h1>
        Quizard
      </h1>
    );
  }
}
export default App;

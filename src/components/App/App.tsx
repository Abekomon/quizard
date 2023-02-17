import React, { Component } from 'react';
import './App.css';
import { getApiData } from '../../apiCalls';

class App extends Component {
  constructor(props:any) {
    super(props)
    this.state = {
      quizData: []
    }
  }

  componentDidMount() {
    getApiData().then((data:any) => console.log(data))
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

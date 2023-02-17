import React, { Component } from 'react';
import './App.css';
import { getApiData } from '../../apiCalls';

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
      </main>
    );
  }
}
export default App;

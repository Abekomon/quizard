import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import { getApiData } from '../../apiCalls';
import  Quiz  from '../Quiz/Quiz';

class App extends React.Component<{}, {quizData: object, favorites:any, error: object}> {
  constructor(props: any) {
    super(props)
    this.state = {
      quizData: [], 
      favorites: [],
      error: {}
    }
  }



  componentDidMount() {
    getApiData().then((data: object) => {
      this.setState({quizData: data})
    })
    .catch((error: object) => {
      this.setState({error:error})
    })
  }


  render() {
    return (
      <main className='app-container'>
        <Link to='/'><h1 className='heading'>Quizard</h1></Link> 
        <Switch>
          <Route exact path='/' render={ () => <Quiz questions={this.state.quizData}/> } />
          <Route exact path='/favorites' render={ () => <h2>Dis Mah Favrite Page</h2> } />
        </Switch>
      </main>
    );
  }
}
export default App;

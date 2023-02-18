import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import { getApiData } from '../../apiCalls';
import  Quiz  from '../Quiz/Quiz';
import Favorites from '../Favorites/Favorites';

class App extends React.Component<{}, {quizData: any[], favorites:any, error: object}> {
  constructor(props: any) {
    super(props)
    this.state = {
      quizData: [], 
      favorites: [],
      error: {}
    }
  }

  addFavorite = (id:number) => {
    const question = this.state.quizData.find(quest => quest.id === id)
    if(!this.state.favorites.includes(question)) {
      this.setState({favorites: [...this.state.favorites, question]})
    }
  }

  componentDidMount() {
    getApiData().then((data: Array<any>) => {
      const mappedData = data.map((item, index) => {
        return {
          id: index,
          ...item
        }
      })
      this.setState({quizData: mappedData})
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
          <Route exact path='/' render={ () => <Quiz questions={this.state.quizData} addFavorite={this.addFavorite}/> } />
          <Route exact path='/favorites' render={ () => <Favorites questions={this.state.favorites}/> } />
        </Switch>
      </main>
    );
  }
}
export default App;

import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import { getApiData } from '../../apiCalls';
import  Quiz  from '../Quiz/Quiz';
import Favorites from '../Favorites/Favorites';
import Categories from '../Categories/Categories';

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

  deleteFavorite = (id:number) => {
    const filterFavs = this.state.favorites.filter((item: any) => item.id !== id)
    this.setState({favorites: filterFavs})
  }

  componentDidMount() {
    getApiData("general").then((data: Array<any>) => {
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
          <Route exact path='/' render={ () => <Categories /> }/>
          <Route exact path='/quiz' render={ () => <Quiz questions={this.state.quizData} addFavorite={this.addFavorite} /> } />
          <Route exact path='/favorites' render={ () => <Favorites questions={this.state.favorites} deleteFav={this.deleteFavorite}/> } />
        </Switch>
      </main>
    );
  }
}
export default App;

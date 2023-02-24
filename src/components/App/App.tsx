import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { getApiData } from "../../apiCalls";
import Quiz from "../Quiz/Quiz";
import Favorites from "../Favorites/Favorites";
import Categories from "../Categories/Categories";
import he from "he";

interface AppProps {}

interface AppState {
  quizData: { id: number; [key: string]: any }[];
  favorites: { id: number; [key: string]: any }[];
  error: object;
}
interface QuizData {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      quizData: [],
      favorites: [],
      error: {},
    };
  }

  addFavorite = (id: number) => {
    const question = this.state.quizData.find(
      (quest: { id: number; [key: string]: any }) => quest.id === id
    );
    if (question && !this.state.favorites.includes(question)) {
      this.setState({ favorites: [...this.state.favorites, question] });
    }
  };

  deleteFavorite = (id: number) => {
    const filterFavs = this.state.favorites.filter(
      (item: { id: number; [key: string]: any }) => item.id !== id
    );
    this.setState({ favorites: filterFavs });
  };

  clearData = () => {
    this.setState({ quizData: [] });
  };

  categoryAPICall = (endpoint: string) => {
    getApiData(endpoint)
      .then((data: { results: QuizData[] }) => {
        const mappedData = data.results.map((item, index) => {
          const scrubbedQuestion = he.decode(item.question);
          return {
            id: index,
            ...item,
            question: scrubbedQuestion,
          };
        });
        this.setState({ quizData: mappedData });
      })
      .catch((error: object) => {
        this.setState({ error: error });
      });
  };

  render() {
    return (
      <main className="app-container">
        <Link to="/" className="home-link">
          <h1 className="heading">Quizard</h1>
        </Link>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Categories
                clearData={this.clearData}
                categoryAPICall={this.categoryAPICall}
              />
            )}
          />
          <Route
            exact
            path="/quiz"
            render={() => (
              this.state.quizData.length ? 
              <Quiz
                questions={this.state.quizData}
                addFavorite={this.addFavorite}
              /> : <div className="loader"></div>
            )}
          />
          <Route
            exact
            path="/favorites"
            render={() => (
              <Favorites
                questions={this.state.favorites}
                deleteFav={this.deleteFavorite}
              />
            )}
          />
        </Switch>
      </main>
    );
  }
}
export default App;

import './Categories.css'
import CatCard from '../CatCard/CatCard'
import { Component } from 'react'
import { Link } from 'react-router-dom'

interface CategoriesProps {
    clearData: () => void;
    categoryAPICall: (endpoint: string) => void;
  }
  
  class Categories extends Component<CategoriesProps> {
    componentDidMount() {
      this.props.clearData();
    }
  
    render() {
      return (
        <div className='category-page'>
          <Link to="/" className="home-link">
            <h1 className="heading">Quizard</h1>
          </Link>
          <div className='cat-container'>
            <CatCard category='9' APICall={this.props.categoryAPICall} />
            <CatCard category='12' APICall={this.props.categoryAPICall} />
            <CatCard category='14' APICall={this.props.categoryAPICall} />
            <CatCard category='17' APICall={this.props.categoryAPICall} />
            <CatCard category='21' APICall={this.props.categoryAPICall} />
            <CatCard category='23' APICall={this.props.categoryAPICall} />
          </div>
        </div>
      );
    }
  }

export default Categories
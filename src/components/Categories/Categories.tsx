import './Categories.css'
import CatCard from '../CatCard/CatCard'
import { Component } from 'react'

// const Categories: React.FunctionComponent<any> = ({categoryAPICall}) => {

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
        <div className='cat-container'>
          <CatCard category='10' APICall={this.props.categoryAPICall} />
          <CatCard category='12' APICall={this.props.categoryAPICall} />
          <CatCard category='14' APICall={this.props.categoryAPICall} />
          <CatCard category='17' APICall={this.props.categoryAPICall} />
          <CatCard category='21' APICall={this.props.categoryAPICall} />
          <CatCard category='23' APICall={this.props.categoryAPICall} />
        </div>
      );
    }
  }




export default Categories

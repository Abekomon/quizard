import './Categories.css'
import CatCard from '../CatCard/CatCard'
import { Component } from 'react'

// const Categories: React.FunctionComponent<any> = ({categoryAPICall}) => {

class Categories extends Component<any> {
    constructor(props: any) {
        super(props)
    }

componentDidMount = () => {
    this.props.clearData()
}

render() {
return (
    <div className='cat-container'>
        <CatCard 
        category="general"
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="music"
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="entertainment"
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="sciencenature"
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="sportsleisure"
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="historyholidays"
        APICall={this.props.categoryAPICall}
        />
    </div>
)
    }
}




export default Categories

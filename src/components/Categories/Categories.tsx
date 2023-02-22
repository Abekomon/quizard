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
        title={"General"}
        image=""
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="music"
        title="Music"
        image=""
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="entertainment"
        title="Entertainment"
        image=""
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="sciencenature"
        title="Science & Nature"
        image=""
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="sportsleisure"
        title="Sports & Leisure"
        image=""
        APICall={this.props.categoryAPICall}
        />
        <CatCard 
        category="historyholidays"
        title="History Holidays"
        image=""
        APICall={this.props.categoryAPICall}
        />
    </div>
)
    }
}




export default Categories

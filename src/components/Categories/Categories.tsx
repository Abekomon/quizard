import './Categories.css'
import CatCard from '../CatCard/CatCard'

const Categories: React.FunctionComponent<any> = ({categoryAPICall}) => {

    return (
        <div className='cat-container'>
            <CatCard 
            category="general"
            title={"General"}
            image=""
            APICall={categoryAPICall}
            />
            <CatCard 
            category="music"
            title="Music"
            image=""
            APICall={categoryAPICall}
            />
            <CatCard 
            category="entertainment"
            title="Entertainment"
            image=""
            APICall={categoryAPICall}
            />
            <CatCard 
            category="sciencenature"
            title="Science & Nature"
            image=""
            APICall={categoryAPICall}
            />
            <CatCard 
            category="sportsleisure"
            title="Sports & Leisure"
            image=""
            APICall={categoryAPICall}
            />
            <CatCard 
            category="historyholidays"
            title="History Holidays"
            image=""
            APICall={categoryAPICall}
            />
        </div>
    )
}


export default Categories

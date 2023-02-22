import './Categories.css'
import CatCard from '../CatCard/CatCard'

interface Categories {
    category: string,
    title: string,
    image: string
}

const Categories: React.FunctionComponent<any> = () => {
    return (
        <div className='cat-container'>
            <CatCard 
            category="general"
            title="General"
            image=""
            />
            <CatCard 
            category="music"
            title="Music"
            image=""
            />
            <CatCard 
            category="entertainment"
            title="Entertainment"
            image=""
            />
            <CatCard 
            category="sciencenature"
            title="Science & Nature"
            image=""
            />
            <CatCard 
            category="sportsleisure"
            title="Sports & Leisure"
            image=""
            />
            <CatCard 
            category="historyholidays"
            title="History Holidays"
            image=""
            />
        </div>
    )
}


export default Categories

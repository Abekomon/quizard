import './CatCard.css'
import { Link } from 'react-router-dom'

interface CatCardProps {
    category: string,
    title: string,
    image: string,
    APICall: React.FunctionComponent
}

const CatCard: React.FunctionComponent<any> = (props: CatCardProps) => {
    return (
        <Link to='/quiz' className='cat-link'>
            <div className='cat-wrapper' onClick={() => props.APICall(props.category)}>
                <img src={props.image} />
                <h2>{props.title}</h2>
            </div>
        </Link>
    )
}


export default CatCard
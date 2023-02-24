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
            <div className={`cat-wrapper cat-${props.category}`} onClick={() => props.APICall(props.category)}>
            </div>
        </Link>
    )
}


export default CatCard
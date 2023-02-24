import './CatCard.css'
import { Link } from 'react-router-dom'

interface CatCardProps {
    category: string;
    APICall: (endpoint: string) => void;
  }
  
  const CatCard: React.FC<CatCardProps> = ({ category, APICall }) => {
    return (
      <Link to='/quiz' className='cat-link'>
        <div className={`cat-wrapper cat-${category}`} onClick={() => APICall(category)}>
        </div>
      </Link>
    );
  };


export default CatCard
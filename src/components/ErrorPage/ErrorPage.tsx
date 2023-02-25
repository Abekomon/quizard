import './ErrorPage.css'
import { Link } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  return (
    <div className='error-page'>
      <Link to="/" className="home-link">
        <h1 className="heading">Quizard</h1>
      </Link>
      <h2 className='error-message'>Oops! Something went wrong. Please try again.</h2>
      <Link to='/' className='error-home'>Back To Home</Link>
    </div>
  )
}

export default ErrorPage
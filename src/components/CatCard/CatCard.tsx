import './CatCard.css'

interface CatCardProps {
    name: string,
    path: string
}

const CatCard = ({}, props: CatCardProps) => {
    return (
        <div className='cat-wrapper'>
            <img src={props.path} />
            <h2>{props.name}</h2>
        </div>
    )
}


export default CatCard
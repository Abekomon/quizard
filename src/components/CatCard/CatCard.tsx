import './CatCard.css'

interface CatCardProps {
    category: string,
    title: string,
    image: string,
    APICall: React.FunctionComponent
}

const CatCard: React.FunctionComponent<any> = (props: CatCardProps) => {
    return (
        <div className='cat-wrapper' onClick={() => props.APICall(props.category)}>
            <img src={props.image} />
            <h2>{props.title}</h2>
        </div>
    )
}


export default CatCard
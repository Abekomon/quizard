import './CatCard.css'

interface CatCardProps {
    category: string,
    title: string,
    image: string
}

const CatCard: React.FunctionComponent<any> = (props: CatCardProps) => {
    console.log(props.title)
    return (
        <div className='cat-wrapper'>
            <img src={props.image} />
            <h2>{props.title}</h2>
        </div>
    )
}


export default CatCard
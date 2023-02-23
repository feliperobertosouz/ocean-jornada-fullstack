import './Card.css'
import Tags from '../Tags/Tags';

function Card(props){
   // console.log(props);
    const item = props.item;
    const img = item.imagemUrl;
    const tags = item.tags;
    return <div className="card">
       <img src={img}/>
       <Tags tags={tags}></Tags>
        <h1>{item.nome}</h1>
    </div>
    
}

export default Card;
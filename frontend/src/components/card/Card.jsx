import './Card.css'

function Card(props){
   // console.log(props);
    const item = props.item;
    const img = item.imagemUrl;
    return <div className="card">
       <img src={img}/>
        <h1>{item.nome}</h1>
    </div>
    
}

export default Card;
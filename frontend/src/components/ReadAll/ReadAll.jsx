import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./ReadAll.css"
/**
 * Novos desafios!
 *
 * Tecnologias: ReactJS; Criação de componente; UseState; UseEffect.
 * 1. Criar um componente ReadById
 * 2. Dentro do componente, realizar uma requisição para o endpoint de Read by ID no backend
 * 3. Pegar as informações do backend e enviar para o componente Card
 *
 * Dica: Pode ocultar o componente ReadAll enquanto tiver construindo o ReadById, para não
 * se confundir nas requisições
 */

const itemsMock = [
    {
      _id: "63ee1e0b18f2b9a93da8435a",
      nome: "Rick Sanchez",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      tags: ["Humano","Rick"],
    },
    {
      _id: "63ef87c74522de2944ab1fa8",
      nome: "Morty Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      tags: ["Humano","Morty"],
    },
    {
      _id: "63ef87cc4522de2944ab1fa9",
      nome: "Summer Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      tags: ["Humano","Summer"],
    },
    {
      _id: "63ef87d44522de2944ab1faa",
      nome: "Beth Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      tags: ["Humano","Beth"],
    },
    {
      _id: "63ef87e24522de2944ab1fab",
      nome: "Jerry Smith",
      imagemUrl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      tags: ["Humano","Jerry"],
    },
  ];



function ReadAll()  {

    //const estadoitems = useState([]);
    //const items = estadoitems[0];
    //const setItems = estadoitems[1];
    const [items,setItems] = useState([]);


    async function realizarRequisicao(){
      const url = "http://localhost:3001/itens"
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setItems(data);
    }
    
    useEffect(function (){
      realizarRequisicao();
    }, []);
   

    return <div className="readAll">
        {items.map(function (item) {
           //console.log(item)
            return <Card key={'card' + item._id} item={item}/>;
        })}
         </div>
}

export default ReadAll;
import Card from "../card/Card";
import "./ReadAll.css"
/**
 * Desafios!
 *
 * Primeiro: HTML/CSS; Criação de componente.
 * 1. Criar um componente <Header /> que possua um logo na esquerda e dois itens
 * clicáveis:
 * - Home
 * - Criar
 * 2. Estilizar o Header com uma cor de fundo, o logo com tamanho pequeno e
 * os itens com uma cor que contraste bem com o fundo
 *
 * Segundo: JS; Lista; Map;
 * 1. Para cada item da lista de itens, crie uma propriedade chamada `tags`;
 * 2. Essa propriedade `tags` deve conter uma lista de strings;
 * 3. Cada string representa uma tag daquele personagem;
 * 4. Crie um componente <Tag /> que recebe uma `string` como
 * propriedade (`props`) e exibia um <div> com o texto informado.
 * 5. Estilize o componente <Tag /> para ter uma cor de fundo que contraste com
 * o card.
 * 6. Utilizando o map, exiba dentro do componente <Card />, uma renderização
 * desse componente <Tag /> recém criado.
 */

const items = [
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
    return <div className="readAll">
        {items.map(function (item) {
           //console.log(item)
            return <Card key={'card' + item._id} item={item}/>;
        })}
         </div>
}

export default ReadAll;
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config();
const cors = require("cors");
//const DB_URL = "mongodb://127.0.0.1:27017";
// const DB_URL = process.env.CONNECTIONSTRING
const DB_URL = "mongodb+srv://feliperobertosouz:fekmongodb1347@cursojs.fto5phb.mongodb.net"
const DB_NAME = "ocean-bancodedados";

//classe main
async function Main(){

//conexão com banco de dados
console.log("Conectando banco...");
const client = await MongoClient.connect(DB_URL);
const db = client.db(DB_NAME);
const collection = db.collection("itens");
console.log("Banco de dados conectado com sucesso");


//instacia do express
const app = express();

app.use(cors());
//criando uma rota, PADRAO
app.get("/", function (req, res){
    res.send("oiiii estou rodando")
});

app.get("/oi", (req,res)=>{
    res.send("VocÊ esta na pagina oi")
});


//utilizar express json
app.use(express.json());

// lista
const itens = ["Rick Sanches", "Morty Smith", "Summer Smith"];

//get single ID
app.get("/item/:id", async function (req, res) {
    const id = req.params.id;
    const item = await collection.findOne({ _id: new ObjectId(id) });
    res.send(item);
  });

//get all
app.get("/itens", async (req,res)=>{
    const documentos = await collection.find().toArray();
    console.log(documentos);
    res.send(documentos);
});

//endPonint post [POST] /item
app.post("/item", async function (req, res) {
    // console.log(req.body);
    const item = req.body;
    await collection.insertOne(item);
    res.send(item);
  });

  //PUT
  app.put("/item/:id", async function (req, res) {
    const id = req.params.id;
    const body = req.body;

    // console.log(id, body);

    await collection.updateOne({ _id: new ObjectId(id) }, { $set: body });

    res.send(body);
  });
  
// Endpoint Update -> [PUT] /item/:id
app.put("/item/:id", async function (req, res) {
    const id = req.params.id;
    const body = req.body;

    // console.log(id, body);

    await collection.updateOne({ _id: new ObjectId(id) }, { $set: body });

    res.send(body);
  });

//delete ID [DELETE] /item/id
app.delete("/item/:id", async function (req, res){
  const id = req.params.id;
  await collection.deleteOne({_id: new ObjectId(id)})
  res.send("Deletado o id: " + id);
})

const port = process.env.PORT || 3001;
app.listen(port, function (){
  console.log("Servidor rodando na porta :" + port);
});
}

Main();
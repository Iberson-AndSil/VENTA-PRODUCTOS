const express = require("express")
//const personService = require("./services/personService");
const uri = 'mongodb+srv://henry23tc:Passw0rd2321@supermarket.j5o9kwd.mongodb.net/'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { customerModel } = require('./src/models');
app.get('/', (req, res) => { res.send("DATOS DE CLIENTE"); })

//Listar Todos los Clientes
app.get('/customer', async(req, res)=>{
  const customer = await customerModel.find({});
  res.json( customer );
});
//Listar Cliente por DNI
app.get('/customer/:dni', async(req, res)=>{
  const customer = await customerModel.find({code:req.params.code});
  res.json( customer[0] );
});
//Crear Cliente
app.post('/customer', async(req, res)=>{
  try {
    const {dni, nombre, apellido} = req.body;
    const customer = new customerModel({dni, nombre, apellido});
    const data = await customer.save();
    return res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


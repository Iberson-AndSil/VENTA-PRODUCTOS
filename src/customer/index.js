const express = require("express")
const uri = 'mongodb+srv://henry23tc:Passw0rd@supermarket.j5o9kwd.mongodb.net/'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { customerModel } = require('./models');
app.get('/', (req, res) => { res.send("DATOS DE CLIENTE"); })

//Listar Todos los Clientes
app.get('/customer', async(req, res)=>{
  const client = await customerModel.find({});
  res.json( client );
});
//Listar Cliente por DNI
app.get('/customer/:dni', async(req, res)=>{
  const person = await customerModel.find({dni:req.params.dni});
  res.json( person);
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


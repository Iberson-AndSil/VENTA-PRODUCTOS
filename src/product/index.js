const express = require("express")
const uri = 'mongodb+srv://henry23tc:Passw0rd2321@supermarket.j5o9kwd.mongodb.net/'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { productModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive product"); })

// ver u obtener producto
app.get('/product', async(req, res)=>{
  const product = await productModel.find({});
  res.json( product );
});

// ver u obtener producto por DNI
app.get('/product/:dni', async(req, res)=>{
  const produc = await productModel.find({dni:req.params.dni});
  res.json( produc );
});

// crear producto
app.post('/product', async(req, res)=>{
  try {
    const codeProduct = req.body.codeProduct;
    const precio = req.body.precio;
    const descripcion = req.body.descripcion;
    const stock = req.body.stock;

    const produc = new productModel({codeProduct,precio,descripcion,stock});

    const data = await produc.save();
    return res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


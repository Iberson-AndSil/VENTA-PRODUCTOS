const express = require("express")
const productService = require("./service/productService");
const customerService = require("./service/customerService");
const uri = 'mongodb+srv://henry23tc:Passw0rd2321@supermarket.j5o9kwd.mongodb.net/'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { saleModel } = require('./models');
app.get('/', (req, res) => { res.send("DATOS DE VENTAS"); })

app.get('sales', async(req, res)=>{
  const list = await saleModel.find({});
  res.json( list );
});
app.get('sales/:code', async(req, res)=>{
  const code = await saleModel.find({code:req.params.code});
  res.json( code );
});
app.post('sales', async(req, res)=>{
  try {
    const {code, codeProduct, customer, date, monto} = req.body;
    const product=productService.get(productCode);
    const dni=customerService.get(dni);
    if(!product ) throw ("VENTA NO PROCEDE");
    if(!dni ) throw ("VENTA NO PROCEDE");
    const sale = new saleModel({code, codeProduct, customer, date, monto });
    const data = await sale.save();
    return res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
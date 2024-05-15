const express = require("express")
const productService = require("./service/productService");
const customerService = require("./service/customerService");
const uri = 'mongodb+srv://henry23tc:Passw0rd@supermarket.j5o9kwd.mongodb.net/'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { saleModel } = require('./models');
app.get('/', (req, res) => { res.send("DATOS DE VENTAS"); })

app.get('/sale', async(req, res)=>{
  const list = await saleModel.find({});
  res.json( list );
});
app.get('/sale/:code', async(req, res)=>{
  const code = await saleModel.find({code:req.params.code});
  res.json( code );
});
app.post('/sale', async(req, res)=>{
  try {
    const {code, codeProduct, dni, date, monto} = req.body;
    const product= await productService.get(codeProduct);
    const dniCustomer=await customerService.get(dni);
    if(!product ) throw ("VENTA NO PROCEDE");
    if(!dniCustomer ) throw ("VENTA NO PROCEDE");
    const sale = new saleModel({code, codeProduct, dni, date, monto });
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
const mongoose = require('mongoose');
const Provider = require("./provider.model.js");
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    id: {
    type: Number,
    required: true,
    unique: true,
  },
    title: { 
        type: String, 
        required: true,
        unique: true 
    },
    price: {
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    required: true
  },
}

// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Product = mongoose.model('Product', productSchema);

// Crear juego pasando titulo + nombre de compañía por parámetro
async function saveProduct(
    id,
    title,
    price,
    description,
    companyName
) {
  const provider = await Provider.find({ companyName });
  const provider_id = provider[0]._id.toString();

  const product = new Product({
    id,
    title,
    price,
    description,
    provider: provider_id,
  });

  const result = await product.save();
  console.log(result);
}

module.exports = {
  Product,
  saveProduct
}; // Exportar el modelo y la función para crear productos

/*
const p = new Product({
    id: 2,
    title: "Café con leche",
    price: 1.20,
    description: "Cafe mu weno",
    provider: "690cc398e6a926fd019ff85e"
});



// Guardar en la BBDD
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err))


// Leer todo de la BBDD
Product.find({}).then(data=>console.log(data));
//Product.updateOne({id: 6}, {price: 2.00}).then(data=>console.log(data));
//Product.deleteOne({id: 6}).then(data=>console.log(data)); */

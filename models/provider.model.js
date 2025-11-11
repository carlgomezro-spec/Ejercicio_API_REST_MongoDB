const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true 
    },
    cif: {
        type: String,
        required: true,
        validate: {
      validator: function (v) {
        // Expresión regular para validar el formato general del CIF
        const regex = /^[ABCDEFGHJNPQRSUVW]\d{7}[0-9A-J]$/;
        return regex.test(v);
      },
      message: props => `${props.value} no es un CIF válido`
    }
    },
    address:{
        type: String,
        required: true,
    },
    url_web:{
        type: String,
        required: true,
    }

}

//EN EL FINCHERO MODELS SOLO SE QUEDA EL SCHEMA DE LA COLECCION. LAS FUNCIONES QUE HAYA QUE HACER VAN A SERVICES

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

/*
// Insertar un proveedor
const p = new Provider({
    company_name: "Teatro Marquina",
    cif: "B40236882",
    address: "Calle de Prim 11",
    url_web:"https://www.tortillasmarquina.com"
});

// Guardar en la BBDD
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err)) */

/*
// Insertar otro proveedor
const p2 = new Provider({
    company_name: "Milagritos SL",
    cif: "B40236792",
    address: "Calle de Pirra, 1",
    url_web:"https://www.milagritos.com"
});

// Guardar en la BBDD
p2.save()
.then((data)=>console.log(data)) */

/*
// Insertar otro proveedor
const p3 = new Provider({
    company_name: "Auxilio SL",
    cif: "B40236382",
    address: "Calle de Sierra Toledana, 11",
    url_web:"https://www.auxilio.com"
});

// Guardar en la BBDD
p3.save()
.then((data)=>console.log(data)) */
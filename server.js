const express = require('express');
const cowsay = require("cowsay");
const app = express();
const port = 3000;

//Para leer ficheros .env
require('dotenv').config()

app.use(express.json());

//Middlewares
const error404 = require("./middlewares/error404");

//Morgan
const morgan = require("./middlewares/morgan.js")

// Configuración del logger con Morgan
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Rutas
const productsRoutes = require("./routes/products.routes.js");
const providersRoutes = require("./routes/providers.routes.js");

//habilitando rutas: GET http://localhost:3000/
app.get('/', (req, response) => {//=(request,response)
  response.send('Hello World!');//datos a enviar
});

//API Rutas habilitadas
app.use('/api/products',productsRoutes); 
app.use('/api/providers',providersRoutes);

app.use(error404); //Manejo de rutas no encontradas

app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Example app listening on port http://localhost:${port}`,
      f: "owl", // Use the owl ASCII art // owl
    })
  );
});
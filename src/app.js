const env = require('dotenv');
const express = require('express');
const cors = require('cors');
const {dbConnect} = require('./config/database.config');

env.config();
const app = express();

//midleware
app.use(cors());
app.use(express.json());
app.use(express.static('src/uploads'));

// conexion a la base de datos
dbConnect();

// importacion de rutas
app.use('/api', require('./routes/index.routing'));


// levantar la aplicacion
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Run server http://localhost: ${port}`);
});
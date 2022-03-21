const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.URI_DB;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('**** Conexión Correcta a la BDD ****');
        } else {
            console.log('**** Error de Conexión en la BDD ****');
        }
    });
}

module.exports = {
    dbConnect
}
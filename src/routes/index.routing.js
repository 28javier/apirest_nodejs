const {Router} = require('express');
const fs = require('fs');
const router = Router();

const PATH_ROUTES = __dirname; 

const removeExtension = (filename) => {
    //TODO: tracks.js [tracks, js];
    return filename.split('.').shift();
}
const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file); //TODO: INDEX, TRACKS, USERS ECT..
    if (name !== 'index') {
        console.log(`Cargando Ruta ${name}`);
        router.use(`/${name}`, require(`./${file}`)); //TODO: http:localhost:3000/api/users ect....
    }
})
// console.log({a});


module.exports = router;

const { Router } = require('express');
const { validacionDeLogin, validacionDeRegistroUsuario } = require('../middleware/validators/auth.middleware');
const { createUsuario, loginUsuario } = require('../controllers/usuario.controllers');
const router = Router();


//TODO: http://localhost:4000/api/auth/login
//TODO: http://localhost:4000/api/auth/register


router.post('/login', [validacionDeLogin], loginUsuario);

router.post('/register', [validacionDeRegistroUsuario], createUsuario);



module.exports = router;




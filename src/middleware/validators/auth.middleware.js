
const { request, response } = require('express');
const { check } = require('express-validator');
const { validateResults } = require('../../helpers/validators.helpers');



const validacionDeRegistroUsuario = [
    check("nombre", 'El nombre es necesario').exists().notEmpty().isLength({ min: 3, max: 20 }),
    check("edad", 'La edad es necesario').exists().notEmpty().isNumeric(),
    check("email", 'El email es necesario').exists().notEmpty().isEmail(),
    check("password", 'El password es necesario').exists().notEmpty(),
    (req = request, resp = response, next) => {
        return validateResults(req, resp, next)
    }
];

const validacionDeLogin = [
    check("email", 'El email es necesario').exists().notEmpty().isEmail(),
    check("password", 'El password es necesario').exists().notEmpty(),
    (req = request, resp = response, next) => {
        return validateResults(req, resp, next)
    }
];


module.exports = { validacionDeRegistroUsuario, validacionDeLogin };
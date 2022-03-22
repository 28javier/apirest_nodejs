
const { request, response } = require('express');
const { check } = require('express-validator');
const { validateResults } = require('../../helpers/validators.helpers');


const validacionDeGetByStorage = [
    check("id", 'No se encontro un track con ese Id ruta....').exists().notEmpty().isMongoId(),
    (req = request, resp = response, next) => {
        return validateResults(req, resp, next)
    }
];


module.exports = { validacionDeGetByStorage };
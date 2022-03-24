
const { request, response } = require('express');
const { check } = require('express-validator');
const { validateResults } = require('../../helpers/validators.helpers');
const validacionDeCreateTracks = [
    check("name", 'El nombre es requerido').exists().notEmpty().isLength({ min: 3, max: 10 }),
    check("album", 'El album es requerido').exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req = request, resp = response, next) => {
        return validateResults(req, resp, next)
    }
];
const validacionDeGetByTracks = [
    check("id", 'No se encontro un track con ese Id ruta....').exists().notEmpty().isMongoId(),
    (req = request, resp = response, next) => {
        return validateResults(req, resp, next)
    }
];
module.exports = { validacionDeCreateTracks, validacionDeGetByTracks };
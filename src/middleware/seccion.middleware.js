const { request, response } = require("express");
// const { verify } = require("jsonwebtoken");
const { verificarJwt } = require('../helpers/jwt.helpers');
const usersModels = require("../models/noSql/users.models");

const authMiddleware = async (req = request, res = response, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                ok: false,
                msg: 'No hay Token en la peticion'
            });
        }
        //TODO: Bearer jijoiji
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verificarJwt(token);
        if (!dataToken._id) {
            return res.status(401).json({
                ok: false,
                msg: 'Error Id Token'
            });
        }
        // saber que usuario realiza tal peticion
        const user = await usersModels.findById(dataToken._id);
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            ok: false,
            msg: 'Error de seccion'
        })
    }
};


module.exports = { authMiddleware }
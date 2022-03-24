const bcryptjs = require('bcryptjs');
const usersModels = require('../models/noSql/users.models');
const { tokenSign } = require('../helpers/jwt.helpers');


/**
 * Controlador encargado de loguear a una persona
 * @param {*} req 
 * @param {*} res 
 */
const loginUsuario = async (req, res) => {

    try {
        const { email, password } = req.body;
        // verificar email
        const usuarioDb = await usersModels.findOne({ email });
        if (!usuarioDb) {
            return res.status(400).json({
                ok: false,
                msg: 'Email o Clave no son correctos',
            });
        };

        // verificar clave
        const validarPassword = bcryptjs.compareSync(password, usuarioDb.password);
        // const validarPassword = bcryptjs.compare(password, usuarioDb.password);
        if (!validarPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Clave o Email no son correctos',
            });
        };
        //TODO: General el token
        const data = {
            token: await tokenSign(usuarioDb),
            user: usuarioDb
        }
        res.status(200).json({
            ok: true,
            msg: 'Login Correctamente Realizado',
            data
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, msg: 'Error inesperado revisar logs' });
    }
}

/**
 * Controlador encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createUsuario = async (req, res) => {
    // console.log(req.body);
    const { nombre, edad, email, password } = req.body;
    // validar campos desde el middleware
    try {
        // verificar correo
        const existeEmail = await usersModels.findOne({ email: email });
        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: "El correo ya esta registrado intenta con otro.",
            });
        }
        const usuario = new usersModels(req.body);
        // encriptar password
        const salt = bcryptjs.genSaltSync(10);
        usuario.password = bcryptjs.hashSync(password, salt);
        // guardar usuario en la bdd
        await usuario.save();
        //no regresar el password al cliente
        // usuario.set('password', undefined, { strict: false });
        const data = {
            token: await tokenSign(usuario),
            user: usuario
        }
        res.status(201).json({ ok: true, msg: "Usuario Creado", data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, msg: "Error inesperado revisar logs", error });
    }
};



module.exports = {
    loginUsuario,
    createUsuario
}
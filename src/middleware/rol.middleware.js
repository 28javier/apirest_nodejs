const { request, response } = require("express");




/**
 * Array con los roles permitidos
 * @param {} rol 
 * @returns 
 */
const checkRol = (roles) => (req = request, res = response, next) => {
    try {
        const { user } = req;
        console.log(user);
        const rolesByUser = user.rol; //TODO: ['user', 'admin']
        const checkValidRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)); //TODO: True, False
        if (!checkValidRol) {
            return res.status(403).json({ ok: false, msg: 'El usuario no tiene permisos de admin no puedes realizar esta peticion' });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Revisar los logs, hablar con el administrador'
        })
    }
};


module.exports = { checkRol }
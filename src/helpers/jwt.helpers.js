
const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
// JWT_SECRET

/**
 * Debe pasar el objeto del usuario
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sing = jsonwebtoken.sign({
        _id: user._id,
        rol: user.rol
    }, JWT_SECRET, {
        expiresIn: '2h'
    }
    );
    return sing;
};

/**
 * Debes de pasar el token de seccion de JWT
 * @param {*} tokenJWT 
 * @returns 
 */
const verificarJwt = async (tokenJWT) => {
    try {
        return jsonwebtoken.verify(tokenJWT, JWT_SECRET)
    } catch (error) {
        return null
    }
}


module.exports = { tokenSign, verificarJwt }
const bcryptjs = require('bcryptjs');


/**
 * Clave sin encriptar: hola.01
 * @param {*} passwordPain
 */
const encryptH = async (passwordPain) => {
    const hash = await bcryptjs.hashSync(passwordPain, 10);
    return hash;
};

/**
 * Pasar clave sin encriptar y pasar clave encriptada
 * @param {*} passwordPain 
 * @param {*} hashPassword 
 */
const compareH = async (passwordPain, hashPassword) => {
    const compare = await bcryptjs.compareSync(passwordPain, hashPassword)
};

module.exports = { encryptH, compareH }
const { request, response } = require("express");
const { storageModel } = require('../models/index');
const PUBLIC_URL = process.env.PUBLIC_URL;



const getUploads = async (req = request, res = response) => {
    try {
        const data = await storageModel.find({});
        res.status(200).json({
            ok: true,
            msg: 'Get track upload',
            data
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Revisar los Logs, error del Servidor',
            error
        });
    }
};




const getUpload = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const data = await storageModel.findById(id);
        if (!data) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontro archivo con ese id'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Get track upload',
            data
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Revisar los Logs, error del Servidor',
            error
        });
    }
};

const postUpload = async (req = request, res = response) => {
    const { body, file } = req;
    // console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);
    res.status(200).json({
        ok: true,
        msg: 'Upload correcto',
        // file,
        data
    });
};


// const updateUpload = async (req = request, res = response) => {
//     const { body, file } = req;
//     // console.log(file);
//     const fileData = {
//         filename: file.filename,
//         url: `${PUBLIC_URL}/${file.filename}`
//     }
//     const data = await storageModel.create(fileData);
//     res.status(200).json({
//         ok: true,
//         msg: 'Upload correcto',
//         // file,
//         data
//     });
// };

const deleteUpload = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const data = await storageModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontro archivo con ese id'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Delete track upload',
            data
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Revisar los Logs, error del Servidor',
            error
        });
    }
};

module.exports = {
    getUploads,
    getUpload,
    postUpload,
    // updateUpload,
    deleteUpload
}
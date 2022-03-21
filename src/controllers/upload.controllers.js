const { request, response } = require("express");
const {storageModel} = require('../models/index');
const PUBLIC_URL = process.env.PUBLIC_URL;

const upload = async(req = request, res = response)=>{


        const {body, file} = req;
        // console.log(file);
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModel.create(fileData);
        res.status(200).json({
            ok: true,
            msg:'Upload correcto',
            // file,
            data
        });
        
};



module.exports = {
    upload
}
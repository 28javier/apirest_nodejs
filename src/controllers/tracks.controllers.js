const { request, response } = require("express");
const {tracksModel} = require('../models/index');

const getTracks = async(req = request, res = response) => {
    try {
        const data = await tracksModel.find(); 
        res.status(200).json({
            ok: true,
            msg:'Todos los Tracks',
            data
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'Revisar los Logs, error del Servidor',
            error
        });
    }
};

const getTracksPaginado = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg:'Get Tracks Paginado'
    });
};

const getTrack = (req = request, res = response) => {
    const {id} = req.params;
    res.status(200).json({
        ok: true,
        msg:'Get Track',
        id
    });
};

const postTracks = async (req = request, res = response) => {
    // console.log(body);
    try {
        const {body} = req;
        const data = await tracksModel.create(body);
        res.status(200).json({
            ok: true,
            msg:'Post Tracks',
            data
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg:'Revisar los Logs, error del Servidor',
            error
        });
    }
};

const updateTracks = (req = request, res = response) => {
    const {id} = req.params;
    res.status(200).json({
        ok: true,
        msg:'Update Tracks',
        id
    });
};

const deleteTracks = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg:'Delete Tracks'
    });
};


module.exports = {
    getTrack,
    getTracks,
    getTracksPaginado,
    postTracks,
    updateTracks,
    deleteTracks
}
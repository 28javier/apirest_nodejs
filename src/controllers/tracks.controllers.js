const { request, response } = require("express");
const { tracksModel } = require('../models/index');

const getTracks = async (req = request, res = response) => {
    try {
        const data = await tracksModel.find({ status: true });
        res.status(200).json({
            ok: true,
            msg: 'Todos los Tracks',
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

const getTracksPaginado = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Get Tracks Paginado'
    });
};

const getTrack = async (req = request, res = response) => {

    try {
        const { id } = req.params;
        const track = await tracksModel.findById(id);
        if (!track) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontro un track con ese Id'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Get Track',
            data: track
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Revisar los Logs, error del Servidor',
            error
        });
    }
};

const postTracks = async (req = request, res = response) => {
    // console.log(body);
    try {
        const { body } = req;
        const data = await tracksModel.create(body);
        res.status(200).json({
            ok: true,
            msg: 'Post Tracks',
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

const updateTracks = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const track = await tracksModel.findByIdAndUpdate(id, body, { new: true });
        if (!track) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontro el id'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Track actualizado correctamente',
            data: track
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Revisar los Logs, error del Servidor',
            error
        });
    }
};

const deleteTracks = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const track = await tracksModel.findByIdAndUpdate(id, { status: false });
        if (!track) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontro el id'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Track Eliminado correctamente',
            data: track
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
    getTrack,
    getTracks,
    getTracksPaginado,
    postTracks,
    updateTracks,
    deleteTracks
}
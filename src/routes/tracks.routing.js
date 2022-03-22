const { Router } = require('express');
const router = Router();
const { getTrack, getTracks, getTracksPaginado, postTracks, updateTracks, deleteTracks } = require('../controllers/tracks.controllers');
const { customHeader } = require('../middleware/customHeaders.middleware');
const { validacionDeCreateTracks, validacionDeGetByTracks } = require('../middleware/validators/tracks.middleware');

router.get('/', getTracks);
router.get('/:id', [validacionDeGetByTracks], getTrack);
router.get('/', getTracksPaginado);
router.post('/', [validacionDeCreateTracks, customHeader], postTracks);
router.put('/:id', [validacionDeGetByTracks, validacionDeCreateTracks], updateTracks);
router.delete('/:id', [validacionDeGetByTracks], deleteTracks);





module.exports = router;

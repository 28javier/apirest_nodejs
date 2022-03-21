const {Router} = require('express');
const router = Router();
const {getTrack, getTracks, getTracksPaginado, postTracks, updateTracks, deleteTracks} = require('../controllers/tracks.controllers');
const { customHeader } = require('../middleware/customHeaders.middleware');
const { validacionDeCreateTracks } = require('../middleware/validators/tracks.middleware');

router.get('/', getTracks);
router.get('/:id', getTrack);
router.get('/', getTracksPaginado);
router.post('/', [validacionDeCreateTracks, customHeader], postTracks);
router.put('/:id', updateTracks);
router.delete('/:id', deleteTracks);





module.exports = router;

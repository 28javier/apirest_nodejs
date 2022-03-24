const { Router } = require('express');
const router = Router();
const { getTrack, getTracks, getTracksPaginado, postTracks, updateTracks, deleteTracks } = require('../controllers/tracks.controllers');
const { customHeader } = require('../middleware/customHeaders.middleware');
const { checkRol } = require('../middleware/rol.middleware');
const { authMiddleware } = require('../middleware/seccion.middleware');
const { validacionDeCreateTracks, validacionDeGetByTracks } = require('../middleware/validators/tracks.middleware');

router.get('/', [
    authMiddleware,
    checkRol(['admin_user'])
], getTracks);

router.get('/:id', [authMiddleware, validacionDeGetByTracks], getTrack);
router.get('/', [authMiddleware], getTracksPaginado);
router.post('/', [authMiddleware, checkRol(['admin_user']), validacionDeCreateTracks, customHeader], postTracks);
router.put('/:id', [authMiddleware, validacionDeGetByTracks, validacionDeCreateTracks], updateTracks);
router.delete('/:id', [authMiddleware, validacionDeGetByTracks], deleteTracks);





module.exports = router;

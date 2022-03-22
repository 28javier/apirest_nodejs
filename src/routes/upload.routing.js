/***
 * TODO: http://localhost:3000/api/upload
 */

const { Router } = require('express');
const router = Router();
const { uploadMiddleware } = require('../helpers/upload.helpers');
const { postUpload, getUploads, getUpload, updateUpload, deleteUpload } = require('../controllers/upload.controllers');
const { validacionDeGetByStorage } = require('../middleware/validators/storage.middleware');



router.get('/', getUploads);
router.get('/:id', [validacionDeGetByStorage], getUpload);
router.post("/", [uploadMiddleware.single("miFile")], postUpload);
// router.put("/:id", updateUpload);
router.delete("/:id", [validacionDeGetByStorage], deleteUpload);



module.exports = router;

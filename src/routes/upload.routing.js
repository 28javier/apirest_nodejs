/***
 * TODO: http://localhost:3000/api/upload
 */

const {Router} = require('express');
const router = Router();
const {uploadMiddleware} = require('../helpers/upload.helpers');
const {upload} = require('../controllers/upload.controllers');



router.post("/", [uploadMiddleware.single("miFile")], upload);



module.exports = router;

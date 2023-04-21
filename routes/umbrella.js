var express = require('express');
const umbrella_controlers= require('../controllers/umbrella');
var router = express.Router();
/* GET umbrella */
// GET request for one umbrella.
router.get('/', umbrella_controlers.umbrella_detail);

/* GET detail umbrella page */
router.get('/detail', umbrella_controlers.umbrella_view_one_Page);
/* GET create umbrella page */
router.get('/create', umbrella_controlers.umbrella_create_Page);
/* GET create update page */
router.get('/update', umbrella_controlers.umbrella_update_Page);
/* GET delete umbrella page */
router.get('/delete', umbrella_controlers.umbrella_delete_Page);
module.exports = router;
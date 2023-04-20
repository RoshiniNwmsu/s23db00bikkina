var express = require('express');
const umbrella_controlers= require('../controllers/umbrella');
var router = express.Router();
/* GET umbrella */
// GET request for one umbrella.
router.get('/', umbrella_controlers.umbrella_detail);
module.exports = router;
/* GET detail umbrella page */
router.get('/detail', umbrella_controlers.umbrella_view_one_Page);
/* GET create umbrella page */
router.get('/create', umbrella_controlers.umbrella_create_Page);
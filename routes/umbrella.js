var express = require('express');
const umbrella_controlers= require('../controllers/umbrella');
var router = express.Router();
/* GET umbrella */
// GET request for one umbrella.
router.get('/umbrella/:id', umbrella_controllers.umbrella_detail);
module.exports = router;
const express = require('express');

let pintor = require('../contollers/PintoresControllers');

let router = express.Router();

router.get('/', pintor.list);

module.exports = router;

const express = require('express');

const mainController = require('../controller/main-controller');

const router = express.Router();

router.post('/', mainController);

module.exports = router;
const express = require('express');

const mainController = require('../controller/main-controller');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({message: 'Welcome aboard'});
})

router.post('/instagram-link', mainController);

module.exports = router;
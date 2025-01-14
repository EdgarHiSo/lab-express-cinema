const express = require('express');
const common  = require('../controllers/common.controller')
const movies = require('../controllers/movies.controller')

const router = express.Router();
router.get('/', common.home)
router.get('/movies', movies.list)
router.get('/movies/:idMovie', movies.detail)
// Routes here

module.exports = router;

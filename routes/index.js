const express = require('express');
const router = express.Router();

router.use('/contacts.js', require('./contacts.js'))

module.exports = router;
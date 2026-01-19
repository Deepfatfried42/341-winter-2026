const express = require('express');
const router = express.Router();

router.use('/contacts.json', require('./contacts.json'))

module.exports = router;
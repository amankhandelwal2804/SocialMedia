const express = require('express');
const router = express.Router();

router.get('/', (req, res) => console.log('users'));

module.exports = router;
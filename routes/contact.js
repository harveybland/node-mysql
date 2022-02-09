const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/contact', (req, res) => [
    db.contact.findAll().then(data => {
        res.send(data)
    })
])

router

module.exports = router;
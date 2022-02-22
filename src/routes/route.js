const obj =  require ('./logger')
const express = require('express');

const router = express.Router();


router.get('/test-me', function (req, res) {
    obj.test('HI')
    console.log(obj.pro)
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
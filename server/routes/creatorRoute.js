const express = require('express');
const router = express.Router();
const {addCreator} = require('../controllers/creatorCtrl')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addcreator', addCreator);

module.exports = router;

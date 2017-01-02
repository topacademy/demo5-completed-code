var express = require('express');
var router = express.Router();

/* GET angular page. */
router.get('/', function(req, res, next) {
  res.render('pages/ng');
});

module.exports = router;
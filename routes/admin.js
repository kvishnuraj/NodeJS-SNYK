var express = require('express');
var router = express.Router();

/* GET admin management page. */
router.get('/admin', function(req, res) {
  res.render('admin', { title: 'Express' });
});

module.exports = router;

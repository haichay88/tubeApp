var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/video/:videoId(\d+)', function(req, res, next) {
  console.log(req.params);
  res.render('Video/video', { title: 'video detail' });
});


module.exports = router;

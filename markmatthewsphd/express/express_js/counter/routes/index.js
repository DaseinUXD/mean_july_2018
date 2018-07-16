var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  console.log('made it to the index router page');
  response.render('index', { title: 'Express' });
});

module.exports = router;

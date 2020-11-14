var express = require('express');
var demoModel = require("../modules/mongo");
var router = express.Router();
var demo  = demoModel.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
  demo.exec(function(err,data){
    if(err)throw err;

    res.render('index', { title: 'MongoDB data retrieval',records:data });
  })
});

module.exports = router;

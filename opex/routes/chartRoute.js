var express = require('express');
var router = express.Router();
var path = require('path');
var chart = require(path.join(__dirname,'..','modules','chartController'));

router.get('/', function(req, res) {
    chart.hello(req,res);
});

router.get('/charts', function(req, res) {

    var filterBy = req.query.filterBy;

    if(filterBy != "weeks"){
        chart.getByDays(req,res);
    }else{
        chart.getByWeeks(req,res);
    }

});

router.get('/meta',function(req,res){

    chart.getMetaData(req,res);

});

module.exports = router;
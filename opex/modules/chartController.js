var path = require('path');
var q = require('q');
var database = require(path.join(__dirname,'..','dbservice','dbservice'));
var dbConstants = require(path.join(__dirname,'..','constants','dbConstants'));


module.exports =
{
	hello: function(req,resp){
                console.log("hello: "+req);
                resp.json({'greet': 'hello'});
        },
        
        getByDays: function(req,resp){
                
                console.log("getByDays: ");

                var query = dbConstants.INVENTORY_FILTER_BY_DAYS_POSTGRESQL;
                var param = [];

                database.getRecords(query,param).then(function(response){
                        console.log("DEBUG: "+JSON.stringify(response));
                        resp.json(response);
                });
        },

        getByWeeks: function(req,resp){
                
                console.log("getByWeeks: ");

                var query = dbConstants.INVENTORY_FILTER_BY_WEEKS_POSTGRESQL;
                var param = [];
                
                database.getRecords(query,param).then(function(response){
                        console.log("DEBUG: "+response);
                        resp.json(response);
                });


        },

        getMetaData: function(req,resp){
                console.log("getMetaData: ");

                var query = dbConstants.INVENTORY_META_DATE_DISTINCT_POSTGRESQL;
                var param = [];
                
                database.getRecords(query,param).then(function(response){
                        console.log("DEBUG: "+response);

                        var filterResponse = response;
                        filterResponse.caption = response.data[0].date+" : "+response.data[response.data.length-1].date;

                        resp.json(filterResponse);
                });
        }
}

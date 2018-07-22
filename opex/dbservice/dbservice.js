var path = require('path');
var dbConstants = require(path.join(__dirname,'..','constants','dbConstants'));
var q = require('q');
var pg = require("pg");

var pg_client;

pg.connect(dbConstants.DB_URL,function(err,client,done) {
    if(err){
        console.log("Not able to get connection "+ err);
        return error;
    }
    console.log("Connection is successful: ");
    pg_client = client;

});

module.exports = {

    //generic method to fetch the rows
    getRecords: function(query,param){

        var deferred = q.defer();
        pg_client.query(query, param,function(err,result) {
            
            if(err){
                var response = {};
                console.log("ERROR: "+err);
                response.type = "error";
                response.error = err;    
                deferred.reject(response);
                console.log("DEBUG dbservice: "+JSON.stringify(response));
            }else{
                var response = {};
                console.log("SUCCESS");
                console.log(result.rows);
                response.type="success";
                response.data=result.rows;
                deferred.resolve(response);
                console.log("DEBUG dbservice: "+JSON.stringify(response));                
            }
        });

        return deferred.promise;

    }

}
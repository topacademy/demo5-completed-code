var express = require('express');
var router = express.Router();

var dbclient = require('mongodb').MongoClient;
//var uri = 'mongodb://localhost:27017/db1';
uri = require('../private/dbconnect').db1

/* GET users listing. */
router.get('/', function(req, res) {
    dbclient.connect(uri,function(err,db){
         db.collection('users').find({}).toArray(function(err,dbusers){                  
            res.render('./pages/dbusers', {"dbusers": dbusers});
            db.close();
           });
        });
    });

module.exports = router;

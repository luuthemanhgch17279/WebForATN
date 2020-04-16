const express = require('express');
//const engines = require('consolidate');
var MongoClient = require('mongodb').MongoClient;

//DataBase (mongo atlas)
var url = 'mongodb+srv://manhltgch17279:manhltgch17279@cluster0-6bapj.gcp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true';

var router = express.Router();

router.get('/', (req, res)=>{
    res.render('homePage');
});

module.exports = router;
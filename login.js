const express = require('express');
const app = express();
const engines = require('consolidate');
const bcrypt= require('bcrypt'); 
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://manhltgch17279:manhltgch17279@cluster0-6bapj.gcp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true';
var router = express.Router();

app.use(express.urlencoded({extended: false}))


router.get('/', async(req, res)=>{
    res.render('loginPage');
})

router.post('/login', async(req, res)=>{
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATN_DB");
    
});

router.get('/register', async(req, res)=>{
    res.render('registerPage');
})

router.post('/register', async(req, res)=>{ 
    var insertEmployee = {
        _id: req.body._id,
        Username: req.body.username,
        Password: req.body.password,
        Fullname: req.body.fullname,
        DoB: req.body.dob,
    };
    let client = await MongoClient.connect(url);
    let dbo = client.db("ATN_DB");
    await dbo.collection("Employee").insertOne(insertEmployee, (err, result)=>{
        console.log(result)
        if (err) return console.log(err)
        console.log('saved to database')
    });
    res.render('loginPage');    
});
module.exports = router;


const express = require('express');
const app     = express();
const router  = express.Router();
const {isOnTestForBangla} = require('../model/validator');
app.set('view engine','ejs');
const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    page:"/very very first test page!"
};


router
    .route('/')
    .get((req,res)=>{
        //res.render('index',data);
        res.json(data);
    })
    .post((req,res)=>{
        if (req.session.cookie.httpOnly===true) {
        const data = req.body;
        const check2 = req.session;
        const check3 = req.headers;
        const value = isOnTestForBangla(req.body.sentence);
        console.log(check2,check3,value);
        res.json({data,check2,check3});
        }else{
            res.json({error:"no credentials"});
        }
    }
    );

module.exports = router;



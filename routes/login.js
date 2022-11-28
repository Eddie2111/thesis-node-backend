
const express = require('express');
const app     = express();
const router  = express.Router();
const jwt     = require('jsonwebtoken');

const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    page:"/very very first test page!"
};


router
    .route('/')
    .get((req,res)=>{
        res.json(data);
    })
    .post((req,res)=>{
        if(req.body.email==="arctic" && req.body.password==="vortex"){
            const token = jwt.sign({email:req.body.email,password:req.body.password},'secretkey',{expiresIn: "1h"});
            res.header({"xsrf-token":"1234567890","Access-Control-Allow-Credentials":"true"});
            res.cookie('presence', token, { path: '/', secure: true, httpOnly: true, maxAge: 900000, sameSite: 'none' });
            res.json({rest:req.body,data:data});
        }else{
            res.json({error:"invalid credentials",message:"not valid credential"});
        }
    }
    );

module.exports = router;



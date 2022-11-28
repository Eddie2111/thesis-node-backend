
const express = require('express');
const app     = express();
const router  = express.Router();
const jwt = require('jsonwebtoken');
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
        const response = req.cookies;
        if (response.presence){
            const token = response.presence;
            const decoded = jwt.verify(token,'secretkey');
            console.log(decoded)
            res.json({data,decoded,status:'ok'});
        }
        if (!response.presence){
            console.log('none')
            res.json({data,decoded,status:'not'});
        }
        
    })
    .post((req,res)=>{
        console.log(req.header)
        res.json({data:req.body,status:'ok'});
    }
    );

module.exports = router;



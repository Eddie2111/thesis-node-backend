
const express = require('express');
const app     = express();
const router  = express.Router();
const dataSchema = require('../model/schema');

app.set('view engine','ejs');
const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    page:"/very very first test page!"
};


router
    .route('/')
    .get(async (req,res)=>{
        const filter = {};
        const data = await dataSchema.find(filter);
        res.json({'showdata':1,data:data});
    }
    )
    .post(async(req,res)=>{
        const headers = req.header;
        const data = await dataSchema.find(filter);
            res.json({'showdata':1,data:data});
    }
    );

module.exports = router;




const express = require('express');
const app     = express();
const router  = express.Router();
const dataSchema = require('../model/schema');
const {isOnResearchForBangla} = require('../model/validator');

const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    page:"/very very first test page!"
};


router
    .route('/')
    .post((req,res)=>{
        const value = isOnResearchForBangla(req.body.sentence);
        if (value===true){
            const data = new dataSchema({
                id: Date.now(),
                message: req.body.sentence
            });
            data.save()
                .then(data =>{
                    res.json({
                        data:"response ok!",
                        status:200,
                        sentData:data
                    });
                })
                .catch(err =>{
                    res.json({message: err});
                });
            }
        else{
            res.json({data:"Please enter bengali sentence!",status:204});
        }
    }
    );

module.exports = router;




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
    .get((req,res)=>{
        if(req.query !== null){
            res.json({message:"it does not work like that", contact:"tarek42223@gmail.com"})
        }
        if (req.body !== null){
            res.json({message:"it does not work like that", contact:"tarek42223@gmail.com"})
        }
        
        res.render('bulk',data);
    })
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
            res.json({message:"not a bangla sentence",data:"Please enter bengali sentence!",status:204});
        }
    }
    );

router
    .route('/getall')
    .get((req,res)=>{
        res.json({
            status:404,
            message:"not found",
            reason:"request denied"
        });
    })
    .post((req,res)=>{
        if(req.query !== null){
            console.log(req.query);
        }
        if (req.body !== null){
            console.log(req.body);
        }
        res.json(
            {
                status: 200,
                message: "success",
                database: "ok!"
            }
        )
    }
    );

module.exports = router;



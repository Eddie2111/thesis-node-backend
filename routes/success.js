const router  = require('express').Router();
const jwt = require('jsonwebtoken');


router
    .route('/')
    .get((req,res)=>{
        //res.render('index',data);
        const response = req.cookies;
        if (response.presence){
            const token = response.presence;
            try{
                const decoded = jwt.verify(token,'secretkey')
                .then(()=>{
                    res.json({status:'ok'});    
                })
                .catch(()=>{
                    res.json({status:'not'});
                })
            }
            catch(err){
                console.log(err);
                res.json({status:'not'});
            }

        }
        if (!response.presence){
            console.log('none')
            res.json({status:'not'});
        }
        
    })
    .post((req,res)=>{
        //res.render('index',data);
        const response = req.cookies;
        if (response.presence){
            const token = response.presence;
            try{
                const decoded = jwt.verify(token,'secretkey')
                .then(()=>{
                    res.json({status:'ok'});    
                })
                .catch(()=>{
                    res.json({status:'not'});
                })
            }
            catch(err){
                console.log(err);
                res.json({status:'not'});
            }

        }
        if (!response.presence){
            console.log('none')
            res.json({status:'not'});
        }
        
    });

module.exports = router;



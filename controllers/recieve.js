const { isOnResearchForBangla } = require('../model/validator'); 
const sentenceSchema = require('../model/schema');

const getResponse = (req,res)=>{
    res.json(data);
}
const postResponse = (req,res)=>{
    // recieve data
    const data = req.body.sentence;
    // validify data
    if(isOnResearchForBangla(data)){
        const dataset = new sentenceSchema({ // creating schema
            id: Date.now(),
            message: data
        }); 
        try{
            dataset.save()                  // saving to database
            .then((data)=>{
                console.log(data)
                res.json({data:"thank you!",status:200});  // success response with data saving
            })
            .catch((err)=>{
                if(data.code===11000){
                    console.log(data)
                    res.json({data:"sentence was already written, try a new one!",status:400});  //success response with data already existing
                }
                else{
                    console.log(err)
                    res.json({data:"could not connect to server",status:500}); //database connection error
                }
            });
        }
        catch(err){
            console.log(err)
        };

    }
    else{
        console.log("False");
        res.json({data:"Please enter bengali sentence and do not use punctuation", status:204}); //not bengali sentence
    }
    // push to database
    
}

module.exports = {
    getResponse,
    postResponse
}


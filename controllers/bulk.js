const { isOnResearchForBangla } = require('../model/validator'); 
const sentenceSchema = require('../model/schema');

const getResponse = (req,res)=>{
    res.json({
        message: "Bulk request is accpeted with post data, your fetch type is wrong.",
        required_Method: "POST",
        required_Data: {
            "sentence": "String!",
            "language": "bn",
            "model": "bert-base-multilingual-cased"
        },
        usable_middlewares: ["Axios", "Fetch", "Flask"],

    })
}
const postResponse = (req,res)=>{
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
        res.json({data:"Please enter bengali sentence!", status:204}); //not bengali sentence
    }
    // push to database
}

module.exports = {
    getResponse,
    postResponse
}
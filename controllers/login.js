const jwt = require('jsonwebtoken');

const getResponse = (req,res)=>{
    res.send('login');
}
const postResponse = (req,res)=>{
    if(req.body.email==="arctic" && req.body.password==="vortex"){
        const token = jwt.sign({email:req.body.email,password:req.body.password},process.env.SECRET,{expiresIn: "1h"});
        res.header({"xsrf-token":"1234567890","Access-Control-Allow-Credentials":"true"});
        res.cookie('presence', token, { path: '/', secure: true, httpOnly: true, maxAge: 900000, sameSite: 'none' });
        res.json({rest:req.body});
    }else{
        res.json({error:"invalid credentials",message:"not valid credential"});
    }
}
module.exports = {
    getResponse,
    postResponse
}
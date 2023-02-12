const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    reason:"wrong connection",
};
const getResponse = (req,res)=>{
    data["_METHOD"] = "GET";
    res.json(data);
}
const postResponse = (req,res)=>{
    data["_METHOD"] = "POST";
    res.json(data);
}

module.exports = {
    getResponse,
    postResponse
}
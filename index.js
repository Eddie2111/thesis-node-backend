const express = require('express');
const app = express();

const cookieparser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

const mongo = require('./model/mongoose');

require('dotenv').config();
const { sessionSetting } = require('./data/config');
const { corsOptions } = require('./data/config');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session(sessionSetting));
app.use(cookieparser());

app.use("/", cors(corsOptions), require('./routes/index'));
app.use("/recieve", cors(corsOptions), require('./routes/recieve'));
app.use("/bulk", require('./routes/bulk'));
app.use("/login", cors(corsOptions), require('./routes/login'));
app.use("/success", cors(corsOptions), require('./routes/success'));

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

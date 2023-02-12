const cookie = {
    secret: "fisdfh89ef89ewh",
    saveUninitialized: false,
    resave: false,
    maxAge: 3600,
}
const corsOptions = {
    origin:["https://bdslp.vercel.app","http:localhost:3000"],
    credentials: true,
    optionsSuccessStatus: 200, 
    preflightContinue: true,
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type','Authorization'],
    exposedHeaders: ['Content-Type'],
    maxAge: 3600,
    accessControlAllowOrigin: true,
  }
const sessionSetting = {
    secret: "fisdfh89ef89ewh",
    saveUninitialized: false,
    resave: false,
    maxAge: 36000,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 36000,
        sameSite: 'none'
    }
}


module.exports = {cookie, corsOptions, sessionSetting};
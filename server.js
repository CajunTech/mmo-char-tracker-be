require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const routes = require('./routes');
const constants = require('./constants');

const corsOptions = {
    headers:"*",
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

// const verifyToken = (req, res, next) => {
//     let token = req.headers['authorization'];
//     if(token){
//         token = token.substring(constants.BEARER_START_INDEX) 
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
//         if(err || !decodedUser){
//             return res.status(constants.UNAUTHORIZED).send(`ERROR: ${err}`);
//         }
//         req.user = decodedUser;

//         next();
//     })
// }

app.use('/auth', routes.auth);
// app.use('/auth/verify', routes.auth);
app.use('/user', routes.user);
// app.use('/post', verifyToken, routes.post);


app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
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


app.use('/auth', routes.auth);
app.use('/user', routes.user);
;


app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})

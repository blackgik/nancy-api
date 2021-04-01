const express = require('express');
require('dotenv').config()
const Nancy = require('./router/dataroute')
require('./db/mongoose')
// creating app
const app = express();
const port = process.env.PORT;

app.use(express.json());
// serving up the server middlewares here
app.use(Nancy);

app.listen(port, ()=> {
    console.log(`server is up on port ${port}`);
})
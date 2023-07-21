const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config({ path: 'src/config/.env' });

const gptRouter = require('./routes/ChatRouters')

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/test', gptRouter)


app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Serwer listening on http://localhost:${process.env.SERVER_PORT}/`)
})
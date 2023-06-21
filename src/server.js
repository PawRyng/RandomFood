const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi} = require("openai");

const serverConfiguration = require("./config/serverConfiguration.json");
require('dotenv').config({ path: 'src/config/.env' });



const app = express();

app.use(bodyParser.json());
app.use(cors());

// chatGPT

const configuration = new Configuration({
    organization:process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(configuration);

const query = async (req, res) =>{
    let { vege, diet, calories, easyCooking, fastCooking } = req.body;
    let query = `Podaj losowe danie, czas, sposób przygotowania, przyrządy oraz składniki i supermarkety, przedstaw w postaci składnik - polskie supermarkety w którym można kupić dany składnik ${(vege || diet || calories || easyCooking || fastCooking) ? "stosuj się do kryteriów:" : ""}${vege ? " jestem wegetarianinem" : ""}${diet ? " stosuję dietę " + diet : ""}${calories ? " niech potrawa ma +/- "+ calories +" kcal" : ""}${easyCooking ? " niech danie będzie łatwe do zrobienia" : ""}${fastCooking ? " nich będzie szybkie do zrobienia" : ""} dane przedstaw w postacji JSON {
        "danie": "nazwa dania",
        "czas": "czas przygotowania",
        "sposób przygotowania": ["krok1","krok2"],
        "przyrządy":["przyrzad1","przyzad2"],
        "składniki": [
        {
        "nazwa": "nazwa składnika",
        "supermarkety": ["nazwa supermarketu 1","nazwa supermarketu 2"]
        }]
        }`;
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages:[
          {role:"user", content:query}
        ], max_tokens: 2000
    });

    
    if(completion.status == 200){
        res.status(200).send(completion["data"]["choices"][0]["message"]["content"]);
    }
    else{
        res.status(500);
    }
}
// --------------------------------------

app.post("/test", query);

app.listen(serverConfiguration.port, ()=>{
    console.log(`Serwer listening on http://localhost:${process.env.SERVER_PORT}/`)
})
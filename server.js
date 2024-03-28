//Importera PostgreSQL-klienten från pg-paketet
const { Client } = require("pg");
//Importera express från express-paketet
const express = require("express");
//Ladda miljövariabler från .env-filen
require("dotenv").config();

//Initiera ny express app
const app = express();
//Ange viewmotor till ejs
app.set("view engine", "ejs");
//Ställ in statiska filer till kat public
app.use(express.static("public"));
//Aktivera URL-kodad bodyparser ( för att kunna bearbeta formulärdata skickade via POST-begäranden )
app.use(express.urlencoded( { extended:true }));

//Konfigurera PostgreSQL-databasklienten
const client = new Client ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    //Ej krypterat
    ssl: {
        rejectUnauthorized: false,
    },
});

//Anslut till PostgreSQL-databasen
client.connect((err) => {
    if(err) {
        console.log("Fel vid anslutning: " + err);
    } else {
        console.log("Ansluten till databas");
    }
});

//Routing
//INDEX
app.get("/", (req, res) => {
    res.render("index");
});

//ABOUT
app.get("/about", (req, res) => {
    res.render("about");
});

//ADD COURSE
app.get("/add", (req, res) => {
    res.render("add");
});

//Ta emot
app.post("/add", async (req, res) => {
    const { code, name, progression, syllabus } = req.body;

    //Parameteranvändning vid infogning av data i databas
    try {
        const result = await client.query(`
            INSERT INTO courses (coursecode, coursename, progression, syllabus)
            VALUES ($1, $2, $3, $4)
        `, [code, name, progression, syllabus]);

        //Omdirigera användare till startsida
        res.redirect('/');
    } catch (err) {
        console.error('Fel vid infogning i databasen:', err);
        res.send('Ett fel uppstod');
    }
});

//Starta server
app.listen(process.env.PORT, ()=> {
    console.log("Server startad på port: " + process.env.PORT);
});
## Moment 1 för kurs DT207G

Denna webbplats är ett resultat av en uppgift i DT207G - Backendbaserad webbutveckling. 
Webbplatsens funktion är att kunna spara och lagra kurser samt kursinfo i en databas och visa dem på startsidan.

Vid projektets början installerades npm express ejs pg nodemon. Det skapades en databas på Render.  Det skapades .env fil med miljövariabler för inlogg till render samt en install.js.
I projektet användes node.js och ramverket express samt EJS för att generera dynamiska vyer.

I install.js skrevs kod som initierar anslutningen till PostgreSQL-databasen, med konfigurationsuppgifter hämtade från .env-filen. Här skapades också skript för att skapa databastabellen courses där kurser skulle kunna lagras med information om kurskod, kursnamn, progression och kursplan. Här definierades också primärnyckel och lämpliga datatyper.

I server.js skrevs kod som startar Express-servern och konfigurerar de grundläggande routerna för webbapplikationen. Det inkluderade rutter för att visa startsidan med en lista över kurser, en sida för att lägga till nya kurser via ett formulär, och funktioner för att hantera POST-begäran från detta formulär för att spara kursinformation i databasen. 
En rutt skapades för att hantera borttagning av kurser från databasen, vilket möjliggjorde dynamisk uppdatering av kurslistan på klientens sida.

Projektet versionshanterades med git / github. Det skapades en .gitignore för att exkludera node_modules och .env.
Postgresql användes som dbms och hostades på Render.
Pgadmin installerades för att få en visuell översikt över min databas.

Av: A Hilding
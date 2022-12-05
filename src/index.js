const express = require("express");
const app = express();
const port = process.env.port || 80;
const path = require("path");
const hbs = require('hbs');

const staticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(staticpath));


app.get("/", (req, res)=>{
    res.status(200).render('index');
});
app.get("/about", (req, res)=>{
    res.status(200).render('about')
});
app.get("/weather", (req, res)=>{
    res.status(200).render('weather');
});
app.get("*", (req, res)=>{
    res.status(404).render('404error');
});

app.listen(port, ()=>{
    console.log(`listening ot the port at ${port}`);
});
const express = require('express');

const app = express();

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/myget",(req,res) => {
    console.log(req.body);

    res.send(req.body)
})

app.get("/myformget",(req,res) => {
    
    res.render("getform")
})

app.get("/myformpost",(req,res) => {
    res.render("postform")
})

app.listen(4000,() => {
    console.log(`Server is RUNNING at Port 4000`);
})
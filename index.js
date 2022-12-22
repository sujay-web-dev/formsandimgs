const express = require('express');
const fileUpload = require('express-fileupload')

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));


app.get("/myget", (req, res) => {
    console.log(req.body);

    res.send(req.body)
})

app.post("/mypost", (req, res) => {
    console.log(req.body);
    console.log('file',req.files);
    res.send(req.body)
})

app.get("/myformget", (req, res) => {

    res.render("getform")
})

app.get("/myformpost", (req, res) => {
    res.render("postform")
})

app.listen(4000, () => {
    console.log(`Server is RUNNING at Port 4000`);
})
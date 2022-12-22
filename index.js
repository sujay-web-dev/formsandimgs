const express = require('express');

const app = express();


app.get("/myget",(req,res) => {
    console.log(req.body);

    res.send(req.body)
})

app.listen(4000,() => {
    console.log(`Server is RUNNING at Port 4000`);
})
const express = require('express');

const app = express();

app.use("/", (req,res) => {
    res.send("namaste from dashboard");
})

app.listen(3000);
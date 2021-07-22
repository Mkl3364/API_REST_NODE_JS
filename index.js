const express = require('express')
const app = express()
var mysql = require('mysql');



app.get('/parkings', (req,res) => {
    res.send("liste des parkings")
})

app.listen(8080, () => {
    console.log('Serveur à l\'écoute');
})


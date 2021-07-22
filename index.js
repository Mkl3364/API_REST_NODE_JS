const express = require('express')
const app = express()

app.get('/parkings', (req,res) => {
    res.send("liste des parkings")
})

app.listen(8080, () => {
    console.log('Serveur à l\'écoute');
})


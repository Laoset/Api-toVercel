const express = require('express');
const app = express();
const db = require('./api/db.json')
// const fs = require('fs')

// app.use(express.json({ extended: false}));

app.get("/api/db", (req, res)=>{
    res.send(db)
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> console.log (`Servidor en funcionamiento en el puerto ${PORT}`))

module.exports = app
const express = require('express');
const app = express();
const db = require('./api/db')

app.use(express.json({ extended: false}));

app.use("/api/db", db)

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> console.log (`Servidor en funcionamiento en el puerto ${PORT}`))
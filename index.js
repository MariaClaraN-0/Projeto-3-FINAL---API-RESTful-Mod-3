const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(express.json());

const Conn = require("./models/conn/index");

Conn();

app.use(cors());
app.options("*", cors());

app.get('/', (req, res) => {
    res.status(200).json({message: "API gastronomia funcionando!"});
});

const ItalianRouter = require('./routers/italian.routes');
app.use('/italian', ItalianRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
const mongoose = require('mongoose');

const italiansModel = new mongoose.Schema({
    nome: { type: String, require: true },
    ingredientes: { type: String, require: true },
    preparo: { type: String, require: false },
    historia: { type: String, require: false },
    image: { type: URL, require: false },
    dataCriacao: { type: Date, default> Date.now }
});

const Italian = mongoose.model('italians', italiansModel);

module.exports = Italian;
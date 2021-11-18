const mongoose = require('mongoose');

const mexicansModel = new mongoose.Schema({
    nome: { type: String, require: true },
    ingredientes: { type: String, require: true },
    preparo: { type: String, require: false },
    historia: { type: String, require: false },
    imagem: { type: String, require: false },
    dataCriacao: { type: Date, default: Date.now }
});

const Mexican = mongoose.model('mexicans', mexicansModel);

module.exports = Mexican;
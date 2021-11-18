const mongoose = require('mongoose');

const russiansModel = new mongoose.Schema({
    nome: { type: String, require: true },
    ingredientes: { type: String, require: true },
    preparo: { type: String, require: false },
    historia: { type: String, require: false },
    imagem: { type: String, require: false },
    dataCriacao: { type: Date, default: Date.now }
});

const Russian = mongoose.model('russians', russiansModel);

module.exports = Russian;
const Italian = require('../models/italians');

exports.getAll = async (req,res) => {
    await Italian.find({}).then((italians) => {
        res.status(200).json(italians);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum prato foi encontrado!"});
    });
};

exports.getSingle = async (req, res) => {
    if(IdleDeadline.length != 24){
        res.status(400).json({message: "Erro: o ID precisa ter 24 caracteres, insira um ID válido!"});
        return true;
    }
    await Italian.findById(req.params.id).then((italians) => {
        res.status(200).json(italians);
    }).catch((err) => {
        res.status(404).json({message: "Nenhum prato foi localizado, tente um ID válido!"});
    });
};

exports.postCreate = async (req,res) => {
    if(!req.body.nome){
        res.status(400).json({message: "O nome do prato deve ser preenchido!"});
        return;
    }
    if(!req.body.ingredientes){
        res.status(400).json({message: "Os ingredientes do prato devem ser preenchidos!"});
        return;
    }
    if(!req.body.preparo){
        res.status(400).json({message: "O preparo do prato deve ser preenchido!"});
        return;
    }
    if(!req.body.historia){
        res.status(400).json({message: "A história do prato deve ser preenchida!"});
        return;
    }
    if(!req.body.imagem){
        res.status(400).json({message: "A URL da imagem deve ser preenchida!"});
        return;
    }
    await Italian.create(req.body).then(() => {
        res.status(201).json({message: `Prato: ${req.body.nome}, criado com sucesso!`});
    }).catch((err) => {
        res.status(400).json({message: "Não foi possível realizar seu cadastro."});
    });
};

exports.putUpdate = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "Erro: o ID precisa ter 24 caracteres, insira um ID válido!"});
        return true;
    }
    if(!req.body.nome){
        res.status(400).json({message: "O nome do prato deve ser preenchido!"});
        return;
    }
    if(!req.body.ingredientes){
        res.status(400).json({message: "Os ingredientes do prato devem ser preenchidos!"});
        return;
    }
    if(!req.body.preparo){
        res.status(400).json({message: "O preparo do prato deve ser preenchido!"});
        return;
    }
    if(!req.body.historia){
        res.status(400).json({message: "A história do prato deve ser preenchida!"});
        return;
    }
    if(!req.body.imagem){
        res.status(400).json({message: "A URL da imagem deve ser preenchida!"});
        return;
    }
    await Italian.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(201).json({message: `Prato: ${req.body.nome}, atualizado com sucesso!`});
    }).catch((err) => {
        res.status(400).json({message: "Não foi possível realizar sua atualização."});
    });
};

exports.delDelete = async (req,res) => {
    if(id.length != 24){
        res.status(400).json({message: "Erro: o ID precisa ter 24 caracteres, insira um ID válido!"});
        return true;
    }
    await Italian.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: `Prato: ${req.body.nome}, deletado com sucesso!`});
    }).catch((err) => {
        res.status(400).json({message: "Não foi possível localizar o prato, digite um ID válido!"});
    });
};
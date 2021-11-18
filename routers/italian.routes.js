
const express = require("express");
const router = express.Router(); 
const ItalianController = require('./../controller/italian.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota comidas italianas ok"});
});

router.get("/readAll", ItalianController.getAll);

router.get("/readSingle/:id", ItalianController.getSingle);

router.post("/create", ItalianController.postCreate);

router.put("/update/:id", ItalianController.putUpdate);

router.delete("/delete/:id", ItalianController.delDelete);

module.exports = router;

const express = require("express");
const router = express.Router(); 
const RussianController = require('./../controller/russian.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota comidas russas ok"});
});

router.get("/readAll", RussianController.getAll);

router.get("/readSingle/:id", RussianController.getSingle);

router.post("/create", RussianController.postCreate);

router.put("/update/:id", RussianController.putUpdate);

router.delete("/delete/:id", RussianController.delDelete);

module.exports = router;
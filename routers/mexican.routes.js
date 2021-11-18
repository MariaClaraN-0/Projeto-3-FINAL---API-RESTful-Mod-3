
const express = require("express");
const router = express.Router(); 
const MexicanController = require('./../controller/mexican.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota comidas mexicanas ok"});
});

router.get("/readAll", MexicanController.getAll);

router.get("/readSingle/:id", MexicanController.getSingle);

router.post("/create", MexicanController.postCreate);

router.put("/update/:id", MexicanController.putUpdate);

router.delete("/delete/:id", MexicanController.delDelete);

module.exports = router;
const express = require('express');
const router = express.Router();
const People = require('../models/people');



router.get('/', async (req,res) => {
        console.log('----------')
        const tarea = await People.find();
        console.log(tarea);
        res.json(tarea);
        
       
    });


router.post('/', async (req,res) => {
        const {name} = req.body;
        const tarea2 = new People({name});
        console.log(tarea2);
        tarea2.save();
        res.json('recibido');
      
        
       
    });


module.exports = router;
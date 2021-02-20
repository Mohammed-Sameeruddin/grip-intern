const express = require('express');
const router = new express.Router();
const Customer = require('../models/customer.js');
const Transfer = require('../models/transfer.js');


// localhost:8000
router.get("/",(req,res)=> {
    res.status(201).send("Banking Backend Api");
});

// localhost:8000/customers
router.get("/customers",async (req,res)=>{
    try{
        const CustomerData = await Customer.find({});
        res.status(201).send(CustomerData);
    }catch(err){
        console.log(err);
    }
})

// localhost:8000/customers/id
router.get("/customers/:accno",async (req,res)=>{
    try{
        const accno = req.params.accno;
        const getCustomer = await Customer.find({accno:accno});
        res.status(201).send(getCustomer);
    }catch(err){
        console.log(err);
    }
})

router.put('/customers/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const upadateData = await Customer.findByIdAndUpdate(id,req.body,{new : true});
        res.status(201).send(updateData);

    }catch(err){
        res.status(400).send(err);
    }
});

// localhost:8000/transfer
router.get('/transfer',async (req,res)=>{
    try{
        const transferData = await Transfer.find({});
        res.status(201).send(transferData);
    }catch(err){
        console.log(err);
    }
})

router.post('/transfer',async (req,res)=>{
    try{
        const transferData = new Transfer(req.body);
        const createTransfer = await transferData.save();
        res.status(201).send(createTransfer);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
const express = require('express');
const router = new express.Router();
const NancyData = require('../model/nancyModel')
const { sendNancyMail } = require('../util/sendEmail')

router.post('/data-nancy/require', async (req, res)=> {
    // const checkClient = await NancyData.findOne(req.body.email)
    // if(checkClient.email === req.body.email) {
    //     res.status(409).send({ success: false, message: 'email already exist', checkClient})
    // }
    const dataRequired = new NancyData(req.body);
    try {
        await dataRequired.save()
        await sendNancyMail(dataRequired)
        res.status(201).send({success: true, dataRequired})
    } catch (error) {
        res.status(500).send({success:false, message:'conflict, check the data you are Passing'})
    }
})

router.get('/', (req,res)=> {
    res.send({success:true, message: 'hello'})
})

module.exports = router;
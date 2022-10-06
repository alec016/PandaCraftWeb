const User = require('../model/user');
const Staff = require('../model/staff')

const router = require('express').Router()


//Post Method
router.post('/user/post', async (req, res) => {

    let exists = false

    const usuarios = await User.find();
    for(let user of usuarios){
        if(user.userName === req.body.user) {
            exists = true
            break
        }
        if(user.email === req.body.email){
            exists = true
            break;
        }
    }

    if(exists){
        res.status(405).json({message: "El usuario registrado ya existe"})
        return
    }

    const data = new User({
        userName: req.body.user,
        pass: req.body.pass,
        email: req.body.email,
        registerDate: new Date()
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
router.post('/staff/post', async (req, res) => {
    const staff = new Staff({
        "name": req.body.name
    })

    try {
        const staffToSave = await staff.save();
        res.status(200).json(staffToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/user/getAll', async (req, res) => {
    try{
        const data = await User.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/staff/getAll', async (req, res) => {
    try{
        const data = await Staff.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/user/getOne/:userName', async (req, res) => {
    try{
        const users = await User.find()
        let u;
        for(const user of users){
            if(user.userName === req.params.userName){
                u = user;
                break;
            }
        }
        res.json(u)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/staff/getOne/:id', async (req, res) => {
    try{
        const data = await Staff.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/user/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.patch('/staff/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//Delete by ID Method 
router.delete('/user/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.delete('/staff/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;
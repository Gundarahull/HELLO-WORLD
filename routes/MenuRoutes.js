const express=require('express')
const router=express.Router()

const MenuItem = require('../models/Menu')

router.get('/getmenu', async (req, res) => {
    try {
        const getmenu = await MenuItem.find()
        console.log("fetting menu", getmenu);
        res.status(200).json(getmenu)
    } catch (error) {
        console.log("error in fetching the menu");
    }
})

router.post('/menupost', async (req, res) => {
    try {
        const menudata = req.body
        const menubody = new MenuItem(menudata) //here MenuItem which we required for that
        const donemenu = await menubody.save();
        console.log("menu", donemenu);
        res.status(200).json(donemenu)

    } catch (error) {
        console.log("error in menu saving");

    }

})

module.exports=router
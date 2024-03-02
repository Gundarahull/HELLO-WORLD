const express=require('express')
const router=express.Router()
const Person = require('../models/Person')


router.post('/person', async (req, res) => {
    try {
        const data = req.body
        console.log("DONE");
        //creating a documnet
        //assign the data into database
        const newPerson = new Person(data)
        const response = await newPerson.save()  //in the save its self it returnsa promise we can add(error, data)
        console.log("data saved");
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'something is fodhy' }) //sever-error status //something gadabada in bdy
    }
})

router.get('/person', (req, res) => {
    Person.find()
        .then(data => {
            console.log("persons data", data);
            res.status(200).json(data)
        }).catch(err => console.log(err))
})


router.get('/person/:worktype', async (req, res) => {
    try {
        const para = req.params.worktype;
        if (para == 'chef' || para == 'waiter' || para == 'manager') {

            const data = await Person.find({ work: para })
            console.log("particluar", data);
            res.status(200).json(data)

        } else {
            res.status(404).send("mdrchsas")
        }

    } catch (error) {
        console.log("parans erroe");

    }
})
//params is varaibale we can assign anything to it
//update 
router.put('/person/:objid',async(req,res)=>{
    try {
        const pariobj=req.params.objid
        const reqbody=req.body
        //yekkada and yendhi
        const updated=await Person.findByIdAndUpdate(pariobj,reqbody,{
            runValidators:true, //its checking the conditions of schema 
            new:true //update yemo ayithundhi but you didnt taste the receipe 
        })
        console.log("updated done");
        if(!updated){
            res.status(404).json({ err: 'chusuko ra pumki' })
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ err: 'something is fodhy' })
        
    }

})

router.delete("/person/:id", async (req,res)=>{
    try {
        const pariobj=req.params.id
        const removedata=await Person.findOneAndDelete({ _id: pariobj })
        console.log("removed data",removedata);
        if (!removedata) {
            return res.status(404).json({ message : "No user found with given id" });
        }
          res.status(200).json({message:"user deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(404).json({ err: 'something is deleting' })
    }
})

module.exports=router; 
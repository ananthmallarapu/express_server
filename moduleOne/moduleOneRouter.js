const express=require("express");
const controller=require('./moduleOneController.js');
const router= express.Router();

router.post('/favourites/:placeid?',(req,res) =>{
   
    
     controller.postDataIntoFile(req, (err,result) =>{
         console.log(err);
        if(err){
            res.status('500').send("cannot post to favourites");
        }
        else
        res.send(req.body);
     });

       
        

});
router.get('/favourites/:placeid?',(req,res,next) =>{
    controller.sendData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot get to favourites");
        }
        else
    res.json(JSON.parse(result));
    });
    
   
});
router.put('/favourites/:placeid?',(req,res) =>{
    console.log("put method");
    controller.updateData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot get to favourites");
        }
        else
    res.json("updated  succesfully");
    });

   
});
router.delete('/favourites/:placeid?',(req,res) =>{
    controller.deleteData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot get to favourites");
        }
        else
    res.json("deleted succesfully");
    });
});

module.exports=router;

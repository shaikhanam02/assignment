 var express=require('express');
 var router=express.Router();
 router.get('/',function(req,res,next){
     res.json([
         {id:"E101",name:"Anam"},
         {id:"E102",name:"Nuzam"},
         {id:"E103",name:"Ayesha"}
     ]);
 });
 
 module.exports=router;


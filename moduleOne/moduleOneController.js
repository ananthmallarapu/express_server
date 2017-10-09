const fs =require('fs');
const postDataIntoFile=  function(req,callback) {

 
fs.readFile("./moduleOne/favourites.json",(err,data) =>{
    
    try {
    if (err) {
    throw(err);
      }
      const obj=JSON.parse(data);
      console.log(obj);
      console.log(req.body);
      obj['favourites'].push((req.body));
      console.log(obj);
      
     fs.writeFile("./moduleOne/favourites.json",JSON.stringify(obj,null,3),(err) =>{
         if (err) {
             throw (err);
           }
           return false;
     });
    }
    catch(err){
        console.log("caught the error in catch block");
        return callback(err,{});
      
    }
    callback(null,{});

});
};
const sendData= function(req,callback){
fs.readFile("./moduleOne/favourites.json",(err,data) =>{
    
    try {
    if (err) {
    throw(err);
      }
      
    }
    catch(err){
        console.log("caught the error in catch block");
        return callback(err,{});
      
    }
    callback(null,data);

});
};
const deleteData= function(req,callback){

 fs.readFile("./moduleOne/favourites.json",(err,data) =>{
    
    try {
    if (err) {
    throw(err);
      }
      const obj=JSON.parse(data);
      console.log(req.params.placeid);
     // console.log(obj);
     // console.log(req.body);
     let index= obj['favourites'].find((element) =>{
         //console.log("selected element",element['id']);
        return(req.params.placeid==element['id']);
    });
     
     //console.log("index cale",index);
    indexN =obj['favourites'].indexOf(index);
    //console.log(indexN);
     obj['favourites'].splice(indexN,1);
      console.log(obj);
      
     fs.writeFile("./moduleOne/favourites.json",JSON.stringify(obj,null,3),(err) =>{
         if (err) {
             
             throw (err);
           }
           return false;
     });
    }
    catch(err){
        console.log("caught the error in catch block");
        console.log(err);
        return callback(err,{});
      
    }
    callback(null,{});


});
};
const updateData= function(req,callback){
    
     fs.readFile("./moduleOne/favourites.json",(err,data) =>{
        
        try {
        if (err) {
        throw(err);
          }
          const obj=JSON.parse(data);
          //console.log(obj);
          //console.log(req.body);
         let index= obj['favourites'].find((element) =>{
             return(req.params.placeid===element['id'])
         });
         let indexN=obj['favourites'].indexOf(index);
         index.userComments= req.body['userComments'];
        
         
         console.log(indexN);
          console.log(obj);
          
         fs.writeFile("./moduleOne/favourites.json",JSON.stringify(obj,null,3),(err) =>{
             if (err) {
                 
                 throw (err);
               }
               return false;
         });
        }
        catch(err){
            console.log("caught the error in catch block");
            console.log(err);
            return callback(err,{});
          
        }
        callback(null,{});
    
    
    });
    };
   

module.exports={
    postDataIntoFile:postDataIntoFile,
    sendData:sendData,
    deleteData:deleteData,
    updateData:updateData
}
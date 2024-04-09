const User = require('../models/userModel');

exports.create =  (req, res, next) => {
   
   
         User.create(req.body).then((result)=>{
            console.log(req.body); 
            res.status(201).json(result); 
         }).catch((err)=>{
            console.error("Error creating user:", err);
            res.status(500).json({ message: "Internal server error" });
         })
        
       
    
};

exports.getAll = (req, res, next) => {
  
        
        User.findAll().then((result)=>{
            res.status(200).json(result);
        }).
       
        
    catch ((error) =>{
        
        console.error("Error retrieving appointments:", error);
        res.status(500).json({ message: "Internal server error" });
    })
};

exports.delete = async (req, res, next) => {
    
    
       
        const userId = req.params.userId;
        
       
         User.findByPk(userId).then((result)=>{
            result.destroy();
            res.status(200).json({ message: "User deleted successfully" });
        }). catch ((error)=>{
            console.error("Error deleting user:", error);
            res.status(500).json({ message: "Internal server error" });
        } )
        
    }

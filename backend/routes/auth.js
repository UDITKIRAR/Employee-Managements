const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const fetchuser =require('../middleware/fetchuser')
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const router = express.Router();
const JWT_SECRET="MohitUjjawalPrince()";

// ROUTE 1: Create a User using : POST "/api/auth/createUser". Doesn't require Auth 
router.post('/createUser', [
    // Applying the Validations
    // body('name',"The name field cannot be blank").isLength({ min: 1 }),
    body('email',"Please enter a valid mail").isEmail(),
    body('password',"Minimum Password length must be 8").isLength({ min: 8 }),
], async (req, res) => {

    //if validation check fails ==>Returning Bad request and the corresponding errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success:false,errors: errors.array() });
    }
    
    // Checking if a user with the given mail exists?
    let user= await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({success:false,error: "Sorry a User with this email already exists"})
    }
    
    // Hashing and Salting the password
    const salt = await bcrypt.genSalt(10);
    const secured_password=await bcrypt.hash(req.body.password,salt);

    try {
        // Creating the new user and pushing it into the database.
        // res.send(req.body);
        user = await User.create({
            // name: req.body.name,
            email: req.body.email,
            password: secured_password,
        })

        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);

        res.json({success:true,authtoken});
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send({success:false,error:"Some Error occurred"});
    }
})


// ROUTE 2: Login a User : POST "/api/auth/login". Doesn't require Auth 
router.post('/login', [
    
    // Applying the Validations
    body('email',"Enter a valid email").isEmail(),
    body('password',"Password cannot be blank").exists(),
], async(req,res)=>{
    
    //if validation check fails ==>Returning Bad request and the corresponding errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success:false,errors: errors.array() });
    }
    
    const {email,password} = req.body;

    try {

        // Checking if a user with the given mail exists?
        let user= await User.findOne({email})
        if(!user){
            return res.status(400).json({success:false,error: "Please Login with correct credentials."})
        }

        // Comparing the password and checking if it is true.
        const password_compare=await bcrypt.compare(password,user.password);
        if(!password_compare){
            return res.status(400).json({success:false,error: "Please Login with correct credentials."})
        }

        // If both credentials are correct => send the payload
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);

        res.json({success:true,authtoken});
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send({success:false,error:"Some Error occurred"});
    }
})

// ROUTE 3: Get a User using : POST "/api/auth/getUser".Require login
router.post('/getUser', fetchuser, async(req,res)=>{
    try{
        let userId = req.user.id
        const user = await User.findById(userId).select("-password");
        res.send({success:true,user});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send({success:false,error:"Internal Server Error"})
    }
})

// Exporting the overall Router
module.exports = router
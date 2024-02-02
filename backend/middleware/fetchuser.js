var jwt=require('jsonwebtoken');
const JWT_SECRET="MohitUjjawalPrince()";

const fetchuser=(req,res,next)=>{

    // Get User from the JWT token and add it to req object.
    // this auth-token will be the header when we will send the request.
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }

    try{
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    }
    catch(error){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
}

module.exports = fetchuser
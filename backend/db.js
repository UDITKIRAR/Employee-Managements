const mongoose= require('mongoose');
const mongoURI="mongodb://localhost:27017/practicum"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Successful")
    })
}

module.exports=connectToMongo;
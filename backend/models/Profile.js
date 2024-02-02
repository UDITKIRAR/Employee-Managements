const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProfileSchema= new Schema({
    managed_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    // image:{
    //     type: String,
    // },

    suffix:{
        type: String,
        default: "Mr."
    },

    employee_name: {
        type: String,
        required: true
    },

    gender:{
        type: String,
        default: "Male"
    },

    position:{
        type: String,
        default: "SDE-1"
    },

    role:{
        type: String,
        default: "employee"
    },
    country:{
        type: String,
        default:"India"
    },

    zip_Code:{
        type: Number,
        default:"131001"
    },


    

    date_ofBirth: {
        type: Date,
        default: "2000-01-01"
    },

    date_ofJoining: {
        type: Date,
        default: Date.now(),
    },

    

    age:{
        type: Number,
        required: true
    },

    employee_email:{
        type: String,
        required: true
    },

    salary:{
        type: Number,
        required:true
    },

    phoneNumber:{
        type: Number,
        default:"8950982811",
        // required:true
    },
    
});

const Profile=mongoose.model('profile', ProfileSchema);
module.exports =Profile;
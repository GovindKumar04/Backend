import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    addres:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    specializationIn: [{
        type:String,
        required: true

    }]
},{timestamps: true})
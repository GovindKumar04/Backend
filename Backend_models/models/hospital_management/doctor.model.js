import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    workInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps: true})

const Doctor = mongoose.model("Doctor", doctorSchema);
import mongoose from "mongoose";

const medicalrecordSchema= new mongoose.Schema({},{timestamps: true})


const medicalRecord= mongoose.model("medicalRecord",medicalrecordSchema);
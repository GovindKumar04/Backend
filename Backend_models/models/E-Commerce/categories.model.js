import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},{timestamps:true})

const Categories = new mongoose.model("Categories",categoriesSchema);
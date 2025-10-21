import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db/db.js";
import {app} from "./app.js"


const port = process.env.PORT
connectDB()
.then(() => {
    app.listen(port || 8000,()=>{
        console.log(`App is listening at port: ${port}`)
    })
    
})
.catch((err) => {
    console.log("Mongo db connection failure !!!")
})
import "./config/envConfig.js";

import { connectDB } from "./config/db.js";
import {app} from "./app.js"


const port = process.env.PORT || 8000
connectDB()
.then(() => {
    app.listen(port,()=>{
        console.log(`App is listening at port: ${port}`)
    })
    
})
.catch((err) => {
    console.log("Mongo db connection failure !!!")
})
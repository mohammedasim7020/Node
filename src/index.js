// require('dotenv').config({path:'./evn'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';




dotenv.config({
        path:"./env"
    })
connectDB()
.then(()=>{
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server started on ${port}`))
})
.catch((err)=>{
    console.log(`MongoDB Connection Field !!!`,err)
})

/* Not Best approch
;( async () => {
   try {
    await mongoose.connect(`${process.env.MONGOBD_URI}/${BD_NAME}`);
    app.on("error",(error)=>{
        console.log("Not able to connect with express: ",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log("Server Connected On Post" + process.env.PORT)
    })
   } catch (error) {
    console.error("ERROR: ",error);
    throw error
   }
})()

*/
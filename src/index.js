// require('dotenv').config({path:'./evn'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";


dotenv.config({
        path:"./env"
    })
connectDB()

/*
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
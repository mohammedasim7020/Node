import mongoose from "mongoose";
import { BD_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
       const connectionInstace = await mongoose.connect(`${process.env.MONGOBD_URI}/${BD_NAME}`);
        console.log(`/n MongoDB connected!! DB Host ${connectionInstace.connection.host}`)
    } catch (error) {
        console.log('MongoDB Connection FIELD: ',error);
        process.exit(1)
    }
}


export default connectDB
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try{
        console.log("MONGO_URI:", process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected succesfully\nDatabase Name: ${connectionInstance.connection.host} `)
    } catch(error){
        console.log("Error occured while connecting to the database", error);
        process.exit(1);
    }
}


export default connectDB;




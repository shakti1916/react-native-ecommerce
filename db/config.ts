import mongoose from 'mongoose';
export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI as string).then(()=>{
        console.log("mongo db connected")
    }).catch((err)=>{
        console.log("err in mongo")
    })
    

    
}
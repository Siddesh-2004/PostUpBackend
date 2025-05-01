import dotenv from 'dotenv'
import express from "express"
import connectDB from './db/index.js'
dotenv.config({
    path:'./env'
})
connectDB()
 .then(() => {
    console.log("Database connected successfully");

    app.listen(process.env.PORT||8000 , () => {
        console.log("App is listening on port", process.env.PORT);
    });
 })
 .catch((error)=>{
    console.error("connection failed",error)
 })





























































// (async()=>{
//     try {
//        await  mongoose.connect(`${process.env.MONGODB_URI}/${
//             DB_NAME}`)
//             app.on("error",(error)=>{
//                 console.log("hahahahhahaah")
//                 throw error
//             })
//          app.listen(process.env.PORT,()=>{
//             console.log("app is listening")
//          })   
//     }catch(error){
//         console.error("Error :",error)
//         throw error
//     }
// })()
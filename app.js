const express=require("express");
const app=express();
const mongoose=require("mongoose");
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
const Listing=require("./models/listing");
main().then(()=>{
    console.log("DB is connected");
}).catch((err)=>{
    console.log(err);
});

async function main()
{
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Hi i am root");
});

app.get("/testListing",async (req,res)=>{
 let sampleListing=new Listing({
    title:"My new Home",
    description:"By the beach",
    price:1200,
    location:"Kathmandu",
    country:"Nepal"
 });
 await sampleListing.save();
 console.log("sample was saved");
 res.send("successful testing");
});

//Starting the Server
app.listen(8080,()=>{
    console.log("Server is listening to port no 8080");
});
const mongoose=require("mongoose");
const Listing=require("../models/listing");
const allData=require("./data");


main().then(()=>{
    console.log("Successfully connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
}

const initData=async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(allData.data);
    console.log("Data saved Successfully");
}
initData();


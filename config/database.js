const mongoose=require('mongoose');
require("dotenv").config();
const connectDB = async () => {
    mongoose.connect(process.env.DATABASE_URL).then(console.log("db is connected fine"));
    
}
module.exports = connectDB;
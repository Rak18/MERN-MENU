//MongoDb connection is done here.
const mongoose=require('mongoose');
const connectString=process.env.mongoURI;

const connectDB = async () => {
    try {
       await mongoose.connect(connectString,{
           useUnifiedTopology:true,
           useNewUrlParser:true,
       });
       console.log(`MongoDB connected ❤️`)
    } catch (error) {
       console.log(`MongoDb failed 😒`) 
       console.log(error);
       process.exit(1);
    }
}
module.exports=connectDB;
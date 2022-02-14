import mongoose from "mongoose"
import User  from './user';
import Message from './message';


const connectMongo = () =>{
   console.log(process.env.MONGO_URL);
   return mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true })
}

const models = { User, Message };

export { connectMongo };

export default models;
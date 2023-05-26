import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbName = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const pw = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${username}:${pw}@cluster0.hdqtmdh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

async function dbConnect() {
  try {
    await mongoose.connect(uri);
    console.log("DB connection successful.");
  } catch (error) {
    console.log("DB connection unsuccessful.", error);
  }
}

export default dbConnect;

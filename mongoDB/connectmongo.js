import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from the .env file

const baseUrl = process.env.MONGODB_URL;

async function connectingMongoDB() {
  try {
    await mongoose.connect(baseUrl, {
      dbName: "todo" // Specify the database name here
    });

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

export default connectingMongoDB;

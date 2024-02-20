import mongoose from "mongoose";
import { config } from "dotenv";

const connectDB = async (): Promise<void> => {
  config();
  const dbUrl = process.env.MONGO_DB_URL;

  try {
    await mongoose.connect(`${dbUrl}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;

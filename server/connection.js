import mongoose from "mongoose";

//async func to connect to db
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://parth12638:parth12638@shoppe-globe-backend.1pp9o.mongodb.net/");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export default connectDB;

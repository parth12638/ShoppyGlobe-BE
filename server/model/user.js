// import bcrypt from "bcrypt";
import mongoose from "mongoose";

//user schema to add user or update with validation
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});



const User = mongoose.model("User", userSchema);
export default User;

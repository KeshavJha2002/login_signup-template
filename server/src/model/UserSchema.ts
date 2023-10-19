import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,"Please provide a username"],
    unique: [true,"Username exists"]
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required : [true, "Please provide a unique email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique : false,
  },
  mobile : {
    type : Number
  },
  address: { 
    type: String
  },
  profile: { 
    type: String
  },
});

const User = mongoose.model('User',UserSchema);

export default User;
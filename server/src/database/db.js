import mongoose from "mongoose";
const Connection = async () => {
  try {
    const url =
      "mongodb+srv://akshat:iM7Oo9i8WQg1OFPw@cluster0.qszn7.mongodb.net/Cluster0?retryWrites=true&w=majority";
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connecting to databse ", error);
  }
};

export default Connection;

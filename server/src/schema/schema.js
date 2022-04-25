import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BlogPost = new Schema({
 title:{
   type:String,
   required:true,
 },
 text:{
   type:String,
   required:true,
 },
 author:{
   type:String,
   required:true,
 }
});

const blog = mongoose.model("post", BlogPost);

export default blog;

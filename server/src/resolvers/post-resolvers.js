import blog from "../schema/schema.js";

// blog :{
// title: "akshat" ,
// text:  "akshat",
// author: "akshat"
//},{

//req.body:{
// title: "akshat",
// text: "akshat",
// author: "akshat"
// }

export const createPost = async (req, res) => {
  console.log(req.body);
  try {
    const post = await new blog(req.body);
    post.save();
    console.log("blog saved");
  } catch (error) {
    res.status(500).json(error);
  }
}; // create

// read ek, sari, id
export const getAllPosts = async (req, res) => {
  try {
    const posts = await blog.find({}); // {} all
    res.status(200).json(posts);
  } catch (error) {
    console.log("error while fetching posts");
    res.status(500).json(error);
  }
};

// mongodb -> fix permanently
// if (update) -> id update
// npmjs.com
export const getPost = async (req, res) => {
  try {
    // params -> parameters user-> server
    const post = await blog.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
// mongo_id, text, title, author

export const updatePost = async (req, res) => {
  try {
    // _id, new value of the schema
    await blog.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("blog updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
// update

// stripe js module payments online

//delete

export const deletePost = async (req, res) => {
  // findById -> post.delete()
  try {
    const post = await blog.findById(req.params.id);
    await post.delete();
    res.status(200).json('blog deleted');
  } catch (error) {
    res.status(500).json(error);
  }
};

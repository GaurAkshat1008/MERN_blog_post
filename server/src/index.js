import express from "express";
import router from "./routes/routes.js";
import bodyParser from 'body-parser'
//callback function
const main = async () => {
  const app = express();
  const port = 3000;
  // localhost:3000/
  // app.use(bodyParser.json({ extended: true }));
  // app.use(bodyParser.urlencoded({ extended: true }));
  
  // server -> routes -> db -> schema table(shape of the schema userData, MessageData) -> resolvers/controllers -> routing -> frontend (/create) chatwebsite/create form 
  // query [:id-> post -> return post] mutation [change in site or db -> posting an article on blogging, on ecommerce]


  // index.js
  // routes can be in index or in separate file(preffered seperate file)
  // db.js that handles mongodb connection
  // controllers -> post-controller -> createPost = creates a post 

  // Create, Read, Update, Delete -> CRUD, REST API

  app.use("/", router);

  app.listen(port, () => {
    console.log("server started at ", port);
  });
};

// to catch error
main().catch((err) => {
  console.log("ERROR: ", err);
});

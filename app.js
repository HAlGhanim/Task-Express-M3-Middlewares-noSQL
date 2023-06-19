const express = require("express");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

connectDb();
const app = express();

app.use(express.json());
app.use("/posts", postsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

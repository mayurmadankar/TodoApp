import dotenv from "dotenv";
dotenv.config();
import express from "express";
import TodoRouter from "./todo/todo.route.js";
import connectingMongoDB from "./mongoDB/connectmongo.js";

const app = express();

app.use(express.json());

// Correct Route
app.post("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/todo", TodoRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectingMongoDB();
});

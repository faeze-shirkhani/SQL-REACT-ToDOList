import "dotenv/config";
import express from "express";
import connect from "./model/connectDB.js";
import routerToDoList from "./routes/routeToDoList.js";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks", routerToDoList);

try {
  await connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
} catch (error) {
  console.log(error);
}

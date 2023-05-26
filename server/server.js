import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";

const app = express();

dotenv.config();
const port = process.env.PORT;

app.use(express.json(), cors());
app.use("/api/users", userRouter);
app.use("/api/", productRouter);

async function startServer() {
  try {
    await dbConnect();
    app.listen(port, () => console.log(`Listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
}

startServer();

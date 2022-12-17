import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDb } from "./src/config.js";
import router from "./src/users/routers/trackRouter.js";

const app = express();

const PORT = 8000;

// mongoconnect

connectDb();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/user", router);

app.use("*", (req, res, next) => {
  const error = {
    code: 404,
    message: "Page not found",
  };
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.code || 500;

  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log("error")
    : console.log(`your server running at http://localhost:${PORT}`);
});

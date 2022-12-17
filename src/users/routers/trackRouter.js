import express from "express";
import { getUsers, insertUser } from "../userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);
    console.log(result);
    if (result?._id) {
      return res.json({
        status: "OK",
        message: "posted Successfully",
      });
    } else
      res.json({
        status: "error",
        message: "unable to add new user",
      });
  } catch (error) {
    console.log(error);
  }

  next(error);
});

router.get("/", async (req, res, next) => {
  try {
    const result = await getUsers();
    res.json({
      status: "OK",
      message: "Success displayed",
      result,
    });
  } catch (error) {
    console.log(error);
  }
  next(error);
});

router.put("/", async (req, res, next) => {
  const { value, userObj } = req.body;

  const result = await updateUsers(value, userObj);

  if (result?._id) {
    return res.json({
      status: "OK",
      message: "update Successfully",
    });
  }
  res.json({
    status: "error",
    message: "unable to update the user",
  });
  next(error);
});

router.delete("/", (req, res, next) => {
  res.json({
    status: "OK",
    message: "deleted Successfully",
  });
});

export default router;

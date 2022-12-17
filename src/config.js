import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const dbUrl = `mongodb://localhost:27017/expenses-tracker`;
    const conn = await mongoose.connect(dbUrl);

    conn
      ? console.log("Mongo Connected")
      : console.log(`unable to connect to mongoDB`);
  } catch (error) {
    console.log(error);
  }
};

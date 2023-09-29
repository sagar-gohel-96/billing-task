import mongoose, { ConnectOptions } from "mongoose";

export const connectDB = async () => {
  const dbURI = process.env.NEXT_PUBLIC_MONGODB_URI;
  const options: ConnectOptions = {};

  if (!dbURI) {
    throw new Error("Db URI not specified");
  }

  try {
    const connect = await mongoose.connect(dbURI, options);
  } catch (e) {
    console.log(e, "connection issue");
  }
};

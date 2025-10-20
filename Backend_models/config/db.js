import mongoose from "mongoose";

export const mongoConnection = mongoose
  .connect()
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("error", e);
  });



import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://bhuvankumarsbk:nR00aFRwvPsxqvvw@cluster0.nnkf8aj.mongodb.net/Chatbot?retryWrites=true&w=majority&appName=Cluster0=/', {
      dbName: "Chatbot",
    });

    console.log("Mongo db connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;

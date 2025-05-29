const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// routes 
app.get("/", (req, res) => {
  res.send("WonderTrip API is running");
});

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/wondertrip")
  .then(() => {
    console.log("MongoDB connected");

    app.listen(3030, () => {
      console.log("Server is running on http://localhost:3030");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

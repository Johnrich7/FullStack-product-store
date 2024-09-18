const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productroute = require("./routes/productroute");
const cors = require("cors");
const dotenv = require("dotenv");
require("../config");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/api/products", productroute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(() => console.log("Error connecting MongoDB"));

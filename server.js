const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const filterRoutes = require("./routes/filter");

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/filter", filterRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ecommerce",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Successfuly conneted to mongoDB");
  }
);

const port = process.env.port || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.listen(port, () => console.log(`Listening on port ${port}`));

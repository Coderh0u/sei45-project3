require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./src/database/database");
const forYouPage = require("./src/routers-abi/forYouPage");

connectDB();

const limit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();

app.use(cors());
app.use(helmet());
app.use(limit);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/fyp", forYouPage);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

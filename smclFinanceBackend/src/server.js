const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./database/db");
const loanRoutes = require("./routes/loanRoutes");

dotenv.config();

const app = express();

connectDB();

// SIMPLE CORS (सब allow)
app.use(cors());
app.use(express.json());

// manual headers (important for Vercel)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/loan", loanRoutes);

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
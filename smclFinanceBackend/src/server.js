const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.use(express.json());

app.post('/api/loan/apply', (req, res) => {
  console.log("Data:", req.body);
  res.json({success: true});
});

app.listen(5000, () => {
  console.log("✅ Backend ready: http://localhost:5000");
});
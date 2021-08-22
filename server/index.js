import express from "express";
import data from "./data.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/bets", (req, res) => {
  res.send(data.bets);
});

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

// create a GET route
app.get("/server", (req, res) => {
  res.send({ express: "SERVER IS CONNECTED TO REACT" });
});

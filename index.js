import express from "express";
import data from "./server/data.js";
import path from "path";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();

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

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("build"));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

// console.log that your server is up and running
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

// create a GET route
app.get("/server", (req, res) => {
  res.send({ express: "SERVER IS CONNECTED TO REACT" });
});

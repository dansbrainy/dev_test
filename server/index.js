import express from "express";
import data from "./data.js";
import path from "path";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  const corsWhitelist = [
    "http://localhost:3000",
    "https://digi-outsource-dev-test.herokuapp.com/",
  ];
  if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }

  next();
});

app.get("/api/bets", (req, res) => {
  res.send(data.bets);
});

const port = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
//   // Exprees will serve up production assets
//   app.use(express.static("build"));

//   // Express serve up index.html file if it doesn't recognize route

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// console.log that your server is up and running
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

// create a GET route
app.get("/server", (req, res) => {
  res.send({ express: "SERVER IS CONNECTED TO REACT" });
});

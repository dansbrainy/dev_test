import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";

const betRouter = express.Router();

betRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const bets = await Product.find({}); //
    res.send(bets);
  })
);

betRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const bet = await Product.findById(req.params.id);

    if (bet) {
      res.send(bet);
    } else {
      res.status(404).send({ message: "Bet Not Found" });
    }
  })
);

export default betRouter;

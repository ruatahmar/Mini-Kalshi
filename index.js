import express from "express";

const app = express();

app.use(express.json());

/*
post /signin
post /signup
post /onramp
get /profile

post /market
get /market

post /bet
get /bet

get /transaction

post /resolve
*/

app.post("/signin", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log("App running on port", process.env.PORT);
});

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "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"
);

// API

//API Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(" Payment received !!! for this amount", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  //Ok -Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

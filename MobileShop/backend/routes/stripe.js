const router = require("express").Router();
var cors = require('cors');
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("sk_test_51KTYWpB1bb1VrKRicJIe3qIxKe2OJ5dG09RPnmIdV1Bvi2i635A7MwDWQW5gAPieC9B2hLaFt4yfAenYqgeeE0Jg00RsE3xPOe");


router.post("/payment", (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

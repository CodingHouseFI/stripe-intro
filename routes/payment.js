var express = require('express');
var router = express.Router();

var stripe = require('stripe')(process.env.STRIPE_API_SECRET);


//   POST /api/payment
router.post('/', (req, res) => {

  var token = req.body.stripeToken;
  var email = req.body.stripeEmail;

  stripe.charges.create({
    amount: 999,
    currency: "usd",
    source: token, // obtained with Stripe.js
    description: `Charge for ${email}`
  }, (err, charge) => {
    if(err) return res.status(400).send(err);

    console.log('charge:', charge);

    res.json(charge);
    
  });
});

module.exports = router;

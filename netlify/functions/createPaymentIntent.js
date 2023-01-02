require("dotenv").config();

const stripe = require("stripe")(process.env.SRTIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return { status: 200, bodu: JSON.stringify({ paymentIntent }) };
  } catch (error) {
    console.log({error});
    return { status: 400, bodu: JSON.stringify({ error }) };
  }
};
  
// Stripe Imports
import Stripe from "stripe";

// Environment Variables Imports
import { STRIPE_SECRET_KEY } from "../utils/env-variables.js";

// Function To Handle Stripe Payments
export async function stripePayment(req, res) {
  const { products } = req.body;

  // Load The Stripe Package With The Stripe Secret Key
  const stripe = Stripe(STRIPE_SECRET_KEY);

  // Mapping Line Items Object To Pass Into Stripe Session
  const line_items = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
        images: [product.photoUrl],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  // Create A Checkout Session
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `https://www.google.com/`,
    cancel_url: `https://www.reddit.com/`,
    line_items,
  });

  // Send Redirection Link To Checkout Page
  res.json({ sessionUrl: session.url });
}

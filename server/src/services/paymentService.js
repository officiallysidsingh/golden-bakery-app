// Stripe Imports
import Stripe from "stripe";

// Environment Variables Imports
import { STRIPE_SECRET_KEY } from "../utils/env-variables.js";

// Function To Handle Stripe Payments
export async function stripePayment(req, res) {
  // Load The Stripe Package With The Stripe Secret Key
  const stripe = Stripe(STRIPE_SECRET_KEY);

  // Mapping Line Items Object To Pass Into Stripe Session
  const line_items = [
    {
      price_data: {
        currency: "inr",
        product_data: {
          name: "T-Shirt",
          description: "A Wearable",
          images: ["https://i.ibb.co/3dsty3F/black-forest-cake.jpg"],
        },
        unit_amount: 213 * 100,
      },
      quantity: 3,
    },
    {
      price_data: {
        currency: "inr",
        product_data: {
          name: "Jeans",
          description: "A Wearable",
          images: ["https://i.ibb.co/3dsty3F/black-forest-cake.jpg"],
        },
        unit_amount: 2500 * 100,
      },
      quantity: 3,
    },
  ];

  // Create A Checkout Session
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    success_url: `https://www.google.com/`,
    cancel_url: `https://www.reddit.com/`,
    line_items,
  });

  // Send Redirection Link To Checkout Page
  res.redirect(303, session.url);
}

// app/api/create-order/route.js
import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount, currency = "INR" } = await req.json();

    if (!amount || isNaN(amount) || amount <= 0) {
      return new Response(
        JSON.stringify({ message: "Invalid or missing amount." }),
        { status: 400 }
      );
    }

    // Initialize Razorpay with your secret keys
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: Math.round(parseFloat(amount) * 100), // convert to paise
      currency,
      receipt: `receipt_order_${Date.now()}`,
      payment_capture: 1, // auto-capture
    };

    const order = await razorpay.orders.create(options);

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to create Razorpay order",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

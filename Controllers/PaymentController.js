// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent(req, res){
    try {
        // const paymentIntent = await stripe.customers.create({
        //     amount: req.body.amount,
        //     currency: 'usd',
        // });
        res.status(200).send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
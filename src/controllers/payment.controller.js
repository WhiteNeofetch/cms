const dollarsToCents = require('dollars-to-cents')

const stripe = require('stripe')('sk_test_51HfDYfFPsYJOypJEGwTOU9O9P8rCvmLOVq0xUJb2hERd0O12KF460cOpSwxQqBWUGRAgxyfhAzbyr8DGHQ4oeSK400LqqADWVJ');

const createPaymentIntent = async ({body: {amount,}}, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: dollarsToCents(amount),
            currency: 'eur',
            payment_method_types: ['card'],
        });


        return res.status(200).send(paymentIntent)
    } catch (e) {
        res.status(500).send(e)
    }
}

const stripeWebhook = async  ({body },res) =>{
    try {
        
    } catch (e) {
        
    }
}

module.exports = {
    createPaymentIntent
}
import createStripe from "stripe-client";

const stripe = createStripe(
  "stripe key"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = async (token, amount, name) => {
  console.log(token)
  try {
    const res = await fetch(`https://pay-pynve3kgyq-uc.a.run.app`, {
      body: JSON.stringify({
        token,
        name,
        amount,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
  }
};

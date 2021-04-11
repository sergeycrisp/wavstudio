/* eslint-disable */

const makeOrder = async () => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/orders/createOrder`);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

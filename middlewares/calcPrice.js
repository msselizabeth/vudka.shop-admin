export const calcPrice = (promotion, price, discount, rate) => {
  let result = 0;
  if (promotion) {
    result = Math.ceil(parseFloat(price) * (1 - parseFloat(discount) / 100) * parseFloat(rate));
  } else {
    result = Math.ceil(parseFloat(price) * parseFloat(rate));
  }

  return result;
};

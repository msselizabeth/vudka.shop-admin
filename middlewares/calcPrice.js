

export const calcPrice = (promotion, price, discount, rate) => {
    let result = 0;
    if (promotion) {
        result = Math.ceil(parseFloat(price) * discount * parseFloat(rate));
    } else {
        result = Math.ceil(parseFloat(price) * parseFloat(rate));
    }

    return result;
}
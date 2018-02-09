// handle cart requests
const cart = [];// should depend on vuex

export const addToCart = (product) => {
  cart.push(product);
  console.log({ cart });
}

export const removeFromCart = (product) => {
  cart.splice(cart.indexOf(product), 1);
}


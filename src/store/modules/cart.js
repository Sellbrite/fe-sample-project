
const state = {
  added: [],
}

const getters = {
  cartProducts: ((state, getters, rootState) => {
    return state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(p => p.id === id);
      return {
        name: product.name,
        price: product.price,
        filename: product.filename,
        quantity,
      }
    })
  }),
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts
      .map(({ quantity, price }) => ({ quantity, price }))
      .reduce((acc, currentVal) => (acc + (currentVal.price * currentVal.quantity)).toFixed(2), 0)
  },
}

const actions = {
  addToCart({ state, commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.added.find(item => item.id === product.id);
      if (!cartItem) {
        commit('addProductToCart', { id: product.id });
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      commit('decrementProductInventory', { id: product.id });
    }
  }
}

const mutations = {
  addProductToCart(state, { id }) {
    state.added.push({ id, quantity: 1 });
  },
  incrementItemQuantity(state, { id }) {
    const cartItem = state.added.find(item => item.id === id);
    cartItem.quantity++;
  },
  setCartItems(state, { items }) {
    state.added = items;
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
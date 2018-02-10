import { getProducts } from './../../services';

const state = {
  all: [],
}

const getters = {
  allProducts: state => {
    return state.all
  },
}

const actions = {
  getAllProducts({ commit }) {
    getProducts().then(({ products }) => {
      let mappedProducts = products.map((product, index) => {
        const { name, inventory } = product;
        const price = product.price / 100;
        const filename = `/assets/images/${product.filename}`;
        const altname = `${product.name} for ${price}`;
        const id = index;

        return {
          id,
          filename,
          name,
          price,
          altname,
          inventory
        };
      });
      commit('setProducts', mappedProducts);
    });
  }
}

const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
import { getProducts } from './../../services';

const state = {
  all: [],
  currentProduct: null
}

const getters = {
  allProducts: state => {
    return state.all
  },
  getProduct: state => {
    return state.currentProduct;
  }
}

const actions = {
  getAllProducts({ commit }) {
    return new Promise((resolve, reject) => {
      getProducts().then(products => {
        commit('setProducts', products)
        resolve(products)
      }).catch(e => reject(e));
    })
  },
  getProductDetail({ commit }, id) {
    return new Promise((resolve, reject) => {
      getProducts()
      .then(products => {
        commit('setProducts', products)
        commit('setProduct', products.find(p => p.id === id) || null);
        return resolve(products.find(p => p.id === id) || null);
      }).catch(e => reject(e));
    })
  }
}

const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
  setProduct(state, product) {
    state.currentProduct = product;
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

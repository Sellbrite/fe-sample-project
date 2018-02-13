<template>
  <section v-bind:class="[displayCart ? 'visible' : 'invisible']">
    <main>
      <div class="component">
        <h2>Your cart</h2>
        <div v-if="!products.length" class="shopping-cart zero-state">
          <p>Nothing in your cart,
            <br>
            start shopping.
          </p>
        </div>
        <div v-if="products.length" class="shopping-cart">
          <ul class="product-list">
            <li 
              v-for="product in products"
              v-bind:key="product.id"
              class="list-item">
              <div class="product-thumbnail">
                <img class="product-image" v-bind:src="product.filename">
              </div>
              <div class="product-total">
                <h4 class="product-name">{{product.name}}</h4>
                <p>{{product.quantity}} x ${{product.price}}</p>
                <p class="product-price">${{roundDecimals(product.price * product.quantity)}}</p>
              </div>
              <div class="product-controls">
                <div class="product-controls-board">
                  <a v-on:click="eliminateProduct(product)">
                    <i class="fa fa-close"></i>
                  </a>
                  <a v-on:click="removeFromCart(product)">
                    <i class="fa fa-minus"></i>
                  </a>
                  <a v-on:click="addToCart(product)">
                    <i class="fa fa-plus"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="cart-controls">
          <div class="cart-calculation">
            <p class="cart-calculation-header">Total</p>
            <p class="cart-calculation-amount">{{`$${roundDecimals(total)}`}}</p>
          </div>
          <button class="shop-cta close-cart" v-on:click="closeCart()">
            <span>back</span>
          </button>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  data: () => {
    return {
      closeCart: function() {
        this.$emit("closeCart", false);
      },
      roundDecimals: amount => Math.round(amount * 100) / 100
    };
  },
  props: {
    displayCart: Boolean
  },
  methods: {
    ...mapActions({
      removeFromCart: "removeFromCart",
      eliminateProduct: "eliminateProduct",
      addToCart: "addToCart"
    })
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  }
};
</script>

<style scoped>
section {
  align-items: center;
  display: flex;
  height: 100%;
  overflow-y: scroll;
  width: 100%;
}

main {
  flex: 1;
}

.invisible {
  height: 0;
  width: 0;
  display: none;
}
.visible {
  background-image: linear-gradient(
    to top right,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.9) 50%
  );
  background-color: rgba(255, 255, 255, 0.75);
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 999;
}

.shopping-cart {
  max-width: 75%;
  margin: 0 auto;
  border-bottom: 2px solid rgba(44, 62, 80, 0.75);
}
.product-list {
  padding: 0;
  list-style: none;
}
.list-item {
  display: flex;
  flex: 1;
  padding: 0 1rem;
  position: relative;
}
.product-thumbnail {
  flex: 25%;
}
.product-image {
  max-width: 100%;
}
.product-name {
  margin: 0;
}
.product-total {
  flex: 75%;
  text-align: right;
}

.product-controls {
  position: absolute;
  right: -0.5rem;
}
.product-controls-board {
  display: flex;
  flex-direction: column;
}
.product-controls-board a {
  align-self: stretch;
  color: rgba(26, 0, 217, 0.75);
  flex: 1;
  margin: 0;
  transition: color 0.5s ease-inl;
}
.product-controls-board a:hover {
  color: rgba(26, 0, 217, 0.9);
}

.cart-controls {
  max-width: 75%;
  margin: 1rem auto 0;
}
.cart-calculation {
  display: flex;
  padding: 0 1rem;
  font-weight: bold;
}
.cart-calculation-header {
  flex: 1;
  text-align: left;
}
.cart-calculation-amount {
  flex: 1;
  text-align: right;
}
.close-cart {
  max-width: 25%;
}

@media (min-width: 600px) {
  .visible {
    background-image: linear-gradient(
      to top right,
      rgba(255, 255, 255, 0.85) 50%,
      rgba(255, 255, 255, 0.85) 50%,
      rgba(255, 255, 255, 0.85) 50%
    );
    background-color: rgba(255, 255, 255, 0.5);
  }

  .cart-controls,
  .shopping-cart {
    max-width: 50%;
  }
}
@media (min-width: 1000px) {
  .cart-controls,
  .shopping-cart {
    max-width: 40%;
  }
}
</style>

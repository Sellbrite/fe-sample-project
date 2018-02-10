<template>
  <section v-bind:class="[displayCart ? 'visible' : 'invisible']">
    <main>
      <div class="component">
        <h2>Your cart</h2>
        <div v-if="!products.length" class="zero-state">
          <p>Nothing in your cart,
            <br>
            start shopping.
          </p>
        </div>
        <div v-if="products.length" class="shopping-cart">
          <ul class="product-list">
            <li v-for="product in products" v-bind:key="product.id" class="list-item">
              <div class="product-thumbnail">
                <img class="product-image" v-bind:src="product.filename">
              </div>
              <div class="product-total">
                <h4 class="product-name">{{product.name}}</h4>
                <p>{{product.quantity}} x ${{product.price}}</p>
                <p class="product-price">${{product.price * product.quantity}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="cart-controls">
          <p class="cart-total">Total: {{`$${total}`}}</p>
          <button class="close-cart" v-on:click="closeCart()">
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
      }
    };
  },
  props: {
    displayCart: Boolean
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
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
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
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0.85) 50%
  );
  background-color: rgba(255, 255, 255, 0.5);
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
}

.shopping-cart {
  max-width: 35%;
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

.cart-controls {
  max-width: 35%;
  margin: 1rem auto 0;
}
.close-cart {
  max-width: 25%;
}
</style>

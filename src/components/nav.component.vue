<template>
  <nav>
    <div class="component">
      <ul class="nav-link-list">
        <li class="nav-link-item nav-logo">
          <p>Cart.ly</p>
        </li>
        <li class="nav-link-item">
          <a>Shop</a>
        </li>
        <li class="nav-link-item nav-cart">
          <a v-on:click="displayCart()">
            Your Cart
            <span class="cart-counter">{{totalProducts(products)}}</span>
          </a> 
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Nav",
  data: () => {
    return {
      totalProducts: products => {
        return products
          .map(p => p.quantity)
          .reduce((acc, currentVal) => acc + currentVal, 0);
      },
      displayCart: function() {
        this.$emit("displayCart", true);
      }
    };
  },
  computed: {
    ...mapGetters({
      products: "cartProducts"
    })
  }
};
</script>

<style scoped>
nav {
  background-color: rgb(26, 0, 217);
}
p,
a {
  color: white;
}
.nav-link-list {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-link-item {
  margin: 0 0.5rem;
}
.nav-link-item.nav-cart {
  margin-left: auto;
}
.cart-counter {
  width: 1.5rem;
  background-color: white;
  color: #1a00d9;
  display: inline-block;
  border-radius: 50%;
  height: 1.5rem;
}
</style>

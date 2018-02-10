<template>
  <div id="app" v-bind:class="[displayCart ? 'fix-view' : '']">
    <Cart v-on:closeCart="e => this.displayCart = e" v-bind:displayCart="displayCart" />
    <Nav v-on:displayCart="e => this.displayCart = e" />
    <ProductList class="main-component"/>
  </div>
</template>

<script>
import Cart from "./components/cart.component.vue";
import Nav from "./components/nav.component.vue";
import ProductList from "./components/productList.component.vue";

export default {
  name: "app",
  components: {
    ProductList,
    Nav,
    Cart
  },
  data: () => {
    return {
      displayCart: false
    };
  }
};
</script>

<style>
body {
  background-color: #fefefe;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
}
a,
p {
  margin: 1rem 0;
  display: block;
}
a:hover {
  cursor: pointer;
}
button {
  border: 1px solid rgba(44, 62, 80, 0.5);
  border-radius: 6px;
  font-size: 1.5rem;
  font-weight: 200;
  width: 50%;
  padding: 0.5rem;
}
button:hover {
  cursor: pointer;
}
.fix-view {
  position: relative;
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#app .component {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
#app .main-component {
  flex: 1;
}
</style>

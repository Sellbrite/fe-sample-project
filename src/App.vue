<template>
  <div id="app">
    <Nav/>
    <Products class="main-component"/>
  </div>
</template>

<script>
import Products from "./components/products.vue";
import Nav from "./components/nav.vue";

export default {
  name: "app",
  components: {
    Products,
    Nav
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100vh;
  flex-direction: column;
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
#app a,
#app p {
  margin: 1rem 0;
  display: block;
}
#app .component {
  max-width: 1200px;
  margin: auto;
}
#app .main-component {
  flex: 1;
}
</style>

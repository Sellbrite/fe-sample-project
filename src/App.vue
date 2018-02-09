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
  background-color: #fefefe;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
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
  margin: auto;
  max-width: 1200px;
  width: 100%;
}
#app .main-component {
  flex: 1;
}
</style>

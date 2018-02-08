<template>
  <div id="app">
    <Nav/>
    <Products/>
  </div>
</template>

<script>
import Products from './components/products.vue'
import Nav from './components/nav.vue'

export default {
  name: 'app',
  components: {
    Products,
    Nav,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

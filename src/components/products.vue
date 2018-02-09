<template>
  <main class="component">
    <h1 class="products-header">Shop Our Featured Collection</h1>
    <ul class="products-list">
      <ProductDetail v-for="product in products" v-bind:productDetail="product" />
    </ul>
    
  </main>
</template>

<script>
import { getProducts } from "./../services";
import ProductDetail from "./productDetail.vue";
export default {
  name: "Products",
  data: () => {
    return {
      products: []
    };
  },
  mounted() {
    getProducts().then(({ products }) => {
      this.products = products;
    });
  },
  components: {
    ProductDetail
  }
};
</script>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
}
</style>

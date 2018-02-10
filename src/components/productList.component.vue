<template>
  <main class="component">
    <h1 class="products-header">Shop Our Featured Collection</h1>
    <ul class="products-list">
      <ProductDetail 
        v-for="product in products" 
        v-bind:key="product.id"
        v-bind:productDetail="product" />
    </ul>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductDetail from "./productDetail.component.vue";

export default {
  name: "Products",
  computed: mapGetters({
    products: "allProducts"
  }),
  components: {
    ProductDetail
  },
  created() {
    this.$store.dispatch("getAllProducts");
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

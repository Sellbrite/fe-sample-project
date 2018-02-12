<template>
  <main class="component main-component"> 
    <div class="product-detail">
      <section class="product-thumbnail">
        <img :src="productDetail.filename" :alt="productDetail.altname">
      </section>
      <section class="product-description">
        <h1 class="product-name">{{productDetail.name}}</h1>
        <p class="">... product description</p>
        <p class="product-price">${{productDetail.price}}</p>
        <div class="product-controls">
          <button v-on:click="addToCart(productDetail)" class="shop-cta">
            <span>add to cart</span>
          </button>
          <router-link :to="{name: 'ProductList'}" class="back-home">
            <span>back</span>
          </router-link>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductDetail",
  props: {
    id: Number
  },
  methods: {
    ...mapActions(["addToCart"]),
    fetchProduct() {
      this.$store
        .dispatch("getProductDetail", this.$route.params.id)
        .then(product => {
          if (!this.$store.state.products.currentProduct) {
            this.$router.push("/");
          }
        });
    }
  },
  computed: {
    ...mapGetters({
      productDetail: "getProduct"
    })
  },
  watch: {
    $route: "fetchProduct"
  },
  beforeMount: function() {
    this.fetchProduct();
  }
};
</script>

<style scoped>
.back-home {
  text-decoration: none;
  color: rgba(26, 0, 217, 1);
}
.product-detail {
  padding: 2rem 1rem 0;
}
@media (min-width: 600px) {
  .product-detail {
    display: flex;
    flex-direction: row;
  }
  .product-thumbnail {
    flex: 40%;
  }
  .product-description {
    flex: 40%;
    text-align: left;
  }
}
@media (min-width: 1000px) {
  /*  */
}
</style>

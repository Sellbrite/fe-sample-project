<template>
  <main v-if="productDetail" class="component main-component"> 
    <div class="product-detail">
      <section class="product-thumbnail">
        <p class="product-thumbnail-counter" v-if="currentItem(productDetail)">{{currentItem(productDetail).quantity}}</p>
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
    id: Number | String
  },
  methods: {
    ...mapActions({
      addToCart: "addToCart",
      elminateProduct: "elminateProduct",
      removeFromCart: "removeFromCart"
    }),
    fetchProduct() {
      this.$store
        .dispatch("getProductDetail", this.parsedId())
        .then(product => {
          if (!this.$store.state.products.currentProduct) {
            this.$router.push("/");
          }
        });
    },
    parsedId() {
      return typeof this.$route.params.id === "string"
        ? parseInt(this.$route.params.id)
        : this.$route.params.id;
    }
  },
  computed: {
    ...mapGetters({
      productDetail: "getProduct",
      currentItem: "currentItem"
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
.product-thumbnail {
  position: relative;
  z-index: -1;
}
.product-thumbnail-counter {
  width: 1.5rem;
  background-color: #1a00d9;
  color: white;
  display: inline-block;
  border-radius: 50%;
  height: 1.5rem;
  position: absolute;
  right: 1rem;
}
@media (min-width: 600px) {
  .product-detail {
    display: flex;
    flex-direction: row;
  }
  .product-thumbnail {
    flex: 40%;
  }
.product-thumbnail-counter {
  right: 3rem;
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

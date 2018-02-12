<template>
  <main class="component main-component"> 
    <p>DETAIL {{ productDetail }} </p>
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
@media (min-width: 600px) {
  /*  */
}
@media (min-width: 1000px) {
  /*  */
}
</style>

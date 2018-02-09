<template>
  <li class="product-detail">
    <div class="">
      <p>
        {{productDetail}}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    productDetail: Object
  }
};
</script>

<style scoped>
  .product-detail {
    width: 25%;
  }
</style>

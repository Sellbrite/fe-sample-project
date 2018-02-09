<template>
  <li class="product-detail">
    <div class="thumbnail">
      <img class="product-image" v-bind:src="productDetail.filename" v-bind:alt="productDetail.altname">
      <div class="product-description">
        <p class="product-name">{{productDetail.name}}</p>
        <p class="product-price">{{productDetail.price}}</p>
        <button v-on:click="addToCart(productDetail)">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    productDetail: Object
  },
  data: () => {
    return {
      addToCart: product => console.log(product)
    };
  }
};
</script>

<style scoped>
.thumbnail {
  box-shadow: 0px 5px 15px rgba(44, 62, 80, 0.25);
  border-radius: 5px;
  padding-bottom: 1rem;
}
.thumbnail:hover {
  box-shadow: 0px 5px 15px rgba(44, 62, 80, 0.5);
  cursor: pointer;
}
.product-description {
  padding: 0 .5rem;
}
.product-detail {
  width: calc(25% - 2rem);
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
}
.product-image {
  max-width: 100%;
}
.product-name {
  font-size: 1.5rem;
  font-weight: 200;
}
.product-price {
  font-size: 2rem;
  font-weight: 200;
}
</style>

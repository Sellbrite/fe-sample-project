<template>
  <li class="product-detail">
    <div class="thumbnail">
      <img class="product-image" v-bind:src="productDetail.filename" v-bind:alt="productDetail.altname">
      <div class="product-description">
        <p class="product-name">{{productDetail.name}}</p>
        <p class="product-price">{{productDetail.price}}</p>
        <button class="shop-cta" v-on:click="addToCart(productDetail)">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { addToCart, removeFromCart } from "./../services";

export default {
  name: "ProductDetail",
  props: {
    productDetail: Object
  },
  data: () => {
    return {
      addToCart: product => addToCart(product)
    };
  }
};
</script>

<style scoped>
.thumbnail {
  box-shadow: 0px 5px 15px rgba(44, 62, 80, 0.25);
  border-radius: 5px;
  padding-bottom: 1rem;
  transition: box-shadow 0.25s ease-in;
}
.product-description {
  padding: 0 0.5rem;
}
.product-detail {
  width: calc(25% - 2rem);
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
}
.product-detail:hover .thumbnail {
  box-shadow: 0px 5px 15px rgba(44, 62, 80, 0.75);
}
.product-detail:hover .shop-cta {
  border: 1px solid rgba(44, 62, 80, 0.9);
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
.shop-cta {
  transition: border 0.25s ease-in;
}
</style>

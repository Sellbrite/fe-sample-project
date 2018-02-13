<template>
  <li class="product-detail">
    <div class="thumbnail">
      <router-link class="product-details-link" router-link :to="{name: 'ProductDetail', params:{ id: productDetail.id } }">
        <p class="product-thumbnail-counter" v-if="currentItem(productDetail)">{{currentItem(productDetail).quantity}}</p>
        <img class="product-image" v-bind:src="productDetail.filename" v-bind:alt="productDetail.altname">
        <div class="product-description">
          <p class="product-name">{{productDetail.name}}</p>
          <p class="product-price">${{productDetail.price}}</p>
        </div>
      </router-link>
      <div class="product-controls">
        <button class="shop-cta" v-on:click="addToCart(productDetail)">
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductDetail",
  props: {
    productDetail: Object
  },
  methods: mapActions(["addToCart"]),
  computed: {
    ...mapGetters({
      cart: "cartProducts",
      currentItem: "currentItem"
    })
  }
};
</script>

<style scoped>
.thumbnail {
  box-shadow: 0px 5px 15px rgba(26, 0, 217, 0.25);
  border-radius: 5px;
  padding-bottom: 1rem;
}
.product-details-link {
  color: #2c3e50;
  text-decoration: none;
  transition: box-shadow 0.25s ease-in;
  position: relative;
  z-index: 0;
}
.product-description {
  padding: 0 0.5rem;
}
.product-detail {
  width: calc(100% - 2rem);
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
}
.product-detail:hover .thumbnail {
  box-shadow: 0px 5px 15px rgba(26, 0, 217, 0.75);
}
.product-detail:hover .shop-cta {
  border: 1px solid rgba(26, 0, 217, 0.5);
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

.product-thumbnail-counter {
  width: 1.5rem;
  background-color: #1a00d9;
  box-shadow: rgba(26, 0, 217, 0.65);
  color: white;
  display: inline-block;
  border-radius: 50%;
  height: 1.5rem;
  position: absolute;
  right: 1rem;
}

@media (min-width: 600px) {
  .product-detail {
    width: calc(50% - 2rem);
    padding: 0.5rem;
    margin: 0 0.5rem 0.5rem;
  }
}
@media (min-width: 1000px) {
  .product-detail {
    width: calc(25% - 2rem);
    padding: 0.5rem;
    margin: 0 0.5rem 0.5rem;
  }
}
</style>

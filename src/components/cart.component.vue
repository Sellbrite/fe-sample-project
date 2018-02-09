<template>
  <section 
    v-bind:style="{height: windowHeight()}"
    v-bind:class="[displayCart ? 'visible' : 'invisible']">
    <main>
      <div class="component">
        <div v-if="!products.length" class="zero-state">
          <p>Your cart</p>
          <p>Nothing in your cart,
            <br>
            start shopping.
          </p>
          <p>total $0</p>
          <button v-on:click="closeCart()">
            <span>back</span>
          </button>
        </div>
        <div v-if="products.length" class="shopping-cart">
          <p>you got some items</p>
        </div>
    </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "Cart",
  data: () => {
    return {
      products: [],
      closeCart: function() {
        this.$emit("closeCart", false);
      },
      windowHeight: function() {
        return window.innerHeight + "px";
      }
    };
  },
  props: {
    displayCart: Boolean
  }
};
</script>

<style scoped>
main {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
}

.invisible {
  height: 0;
  width: 0;
  display: none;
}
.visible {
  background-image: linear-gradient(
    to top right,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0.85) 50%,
    rgba(255, 255, 255, 0.85) 50%
  );
  background-color: rgba(255, 255, 255, 0.5);
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
}
</style>

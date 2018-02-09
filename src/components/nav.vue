<template>
  <nav>
    <div class="component">
      <ul class="nav-link-list">
        <li class="nav-link-item nav-logo">
          <p>Cart.ly</p>
        </li>
        <li class="nav-link-item">
          <a>Shop</a>
        </li>
        <li class="nav-link-item nav-cart">
          <p>
            Your Cart
            <span>{{counter}}</span>
          </p> 
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      counter: 0
    };
  }
};
</script>

<style scoped>
nav {
  background-color: rgb(26, 0, 217);
}
p,
a {
  color: white;
}
.nav-link-list {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-link-item {
  margin: 0 0.5rem;
}
.nav-link-item.nav-cart {
  margin-left: auto;
}
</style>

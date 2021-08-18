<template>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
}
.menu a {
  color: white;
  padding: 1rem;
}

@media screen and (min-width: 320px) {
  .menu a {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 640px) {
  .menu a {
    font-size: 2.5rem;
  }
}
</style>
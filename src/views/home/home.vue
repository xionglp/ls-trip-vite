<template>
  <div class="home">
    <home-navbar></home-navbar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
  </div>
</template>

<script setup>
  import HomeNavbar from './comppnents/home-navbar.vue'
  import HomeSearchBox from "./comppnents/home-search-box.vue"

</script>

<style lang="less" scoped>
  .home {
    .banner img {
      width: 100%;
    }
  }
</style>
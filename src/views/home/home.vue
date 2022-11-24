<template>
  <div class="home">
    <home-navbar></home-navbar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import HomeNavbar from './comppnents/home-navbar.vue'
</script>

<style lang="less" scoped>
  .home {
    .banner img {
      width: 100%;
    }

    .location {
      display: flex;
      height: 44px;
      margin: 0 20px;
      align-items: center;

      .city {
        flex: 1;
      }

      .position {
        width: 74px;
        display: flex;
        align-items: center;

        .text {
          font-size: 12px;
          position: relative;
          top: 1px;
        }

        img {
          width: 18px;
          height: 18px;
          margin-left: 5px;
        }
      }
    }
  }
</style>
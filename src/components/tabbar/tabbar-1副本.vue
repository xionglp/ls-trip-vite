<template>
  <div class="tabbar">
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tabbar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    border-top: 1px solid #f3f3f3;
    display: flex;

    .tabbar-item {
      flex: 1;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;

      img {
        width: 36px;
      }

      .text {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }

</style>
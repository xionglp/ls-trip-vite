<template>
  <div class="app">
    <router-view></router-view>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->

    <tabbar></tabbar>
  </div>
</template>

<script setup>
  import tabbar from '@/components/tabbar/tabbar.vue';

</script>

<style scoped>
</style>

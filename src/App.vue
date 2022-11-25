<template>
  <div class="app">
    <router-view></router-view>
    <!-- <tabbar v-if="!route.meta.hideTabbar"></tabbar> -->
    <tabbar></tabbar>
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router"
  import tabbar from '@/components/tabbar/tabbar.vue';

  const route = useRoute()

</script>

<style scoped>
</style>

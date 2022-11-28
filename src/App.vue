<template>
  <div class="app">
    <router-view></router-view>
    <!-- <tabbar v-if="!route.meta.hideTabbar"></tabbar> -->
    <tabbar />

    <loading />
    
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import tabbar from '@/components/tabbar/tabbar.vue';
import loading from "@/components/loading/loading.vue"

const route = useRoute()
</script>

<style scoped>
</style>

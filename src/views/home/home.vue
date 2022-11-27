<template>
  <div class="home">
    <home-navbar></home-navbar>
    <home-banner></home-banner>
    <home-search-box></home-search-box>
    <home-category></home-category>
    <home-house-list></home-house-list>
    <button @click="onMoreData">加载更多</button>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import HomeNavbar from './comppnents/home-navbar.vue'
import HomeBanner from "./comppnents/home-banner.vue"
import HomeSearchBox from "./comppnents/home-search-box.vue"
import HomeCategory from "./comppnents/home-category.vue"
import HomeHouseList from "./comppnents/home-house-list.vue"

// 组件化思想，分层架构，services、stores、views
// 统一在最外层的父组件中请求
const homeStore = useHomeStore()
homeStore.fetchGetHomeSuggestsActions()
homeStore.fetchGetHomeCategoriesActions()
homeStore.fetchGetHomeHouseListAction()

const onMoreData = () => {
  homeStore.fetchGetHomeHouseListAction()
}

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
}
</style>
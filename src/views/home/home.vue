<template>
  <div class="home" ref="homeRef">
    <home-navbar></home-navbar>
    <home-banner></home-banner>
    <home-search-box></home-search-box>
    <div class="search-bar" v-if="isShowSearchbar">
      <search-bar />
    </div>
    <home-category></home-category>
    <home-house-list></home-house-list>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<script setup>
import { computed, onActivated, ref, watch } from 'vue';
import useHomeStore from '@/stores/modules/home';
import useScroll from "@/hooks/useScroll"
import HomeNavbar from './comppnents/home-navbar.vue'
import HomeBanner from "./comppnents/home-banner.vue"
import HomeSearchBox from "./comppnents/home-search-box.vue"
import HomeCategory from "./comppnents/home-category.vue"
import HomeHouseList from "./comppnents/home-house-list.vue"
import SearchBar from "@/components/search-bar/search-bar.vue"

// 组件化思想，分层架构，services、stores、views
// 统一在最外层的父组件中请求
const homeStore = useHomeStore()
homeStore.fetchGetHomeSuggestsActions()
homeStore.fetchGetHomeCategoriesActions()
homeStore.fetchGetHomeHouseListAction()

// 监听滚动事件
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchGetHomeHouseListAction().then(() => {
      isReachBottom.value = false
    })
  }
})

// 监听搜索框是否显示
const isShowSearchbar =computed(() => {
  return scrollTop.value > 360
})

onActivated(() => {
  homeRef.value.scrollTo({
    top: scrollTop.value
  })
})

</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 60px;
  box-sizing: border-box;
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  background-color: #fff;
  padding: 16px 16px 10px;
}
</style>
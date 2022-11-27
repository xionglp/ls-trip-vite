<template>
  <div class="house-list">
    <h2 class="title">热门精选</h2>
    <template v-for="item in houseLists" :key="item.data.houseId">
      <h3 v-if="item.discoveryContentType === 9">type-9: {{ item.data.houseName }}</h3>
      <h3 v-else-if="item.discoveryContentType === 3">type-3: {{ item.data.houseName }}</h3>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { houseLists }  = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.house-list {
  padding: 10px;
  .title {
    font-size: 22px;
    padding: 10px;
  }
}

</style>
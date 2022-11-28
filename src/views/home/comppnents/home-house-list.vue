<template>
  <div class="house-list">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houseLists" :key="item.data.houseId">
      <house-item-full 
        v-if="item.discoveryContentType === 9" 
        :item-data="item.data" 
        @click="onItemClick(item.data)"
      />
      <house-item-half 
        v-else-if="item.discoveryContentType === 3" 
        :item-data="item.data"
        @click="onItemClick(item.data)"
      />
    </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import HouseItemFull from "@/components/house-item-full/house-item-full.vue"
import HouseItemHalf from "@/components/house-item-half/house-item-half.vue"
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const { houseLists }  = storeToRefs(homeStore)

const router = useRouter()
const onItemClick = (item) => {
  router.push("/detail/" + item.houseId)
}

</script>

<style lang="less" scoped>
.house-list {
  padding: 10px 8px;
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .title {
    font-size: 22px;
    padding: 10px;
  }
}

</style>
<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import useDetailStore from '@/stores/modules/detail';

const detailStore = useDetailStore()
const { swipeData } = storeToRefs(detailStore)
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }
  }
}
</style>
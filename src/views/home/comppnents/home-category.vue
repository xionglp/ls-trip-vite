<template>
  <div class="category">
    <template v-for="(item) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
  .category {
    display: flex;
    overflow-x: auto;
    // height: 80px;
    padding: 0 10px;
    margin-top: 8px;
    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 70px;
      text-align: center;
      padding: 8px 0;

      img {
        width: 32px;
        height: 32px;
      }

      .title {
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }
</style>
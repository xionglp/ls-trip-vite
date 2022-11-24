<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData" :key="item.path">
      <div 
        class="tabbar-item" 
        :class="{active: currentIndex === index}"
        @click="tabbarItemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetsUrl(item.image)" alt="">
        <img v-else :src="getAssetsUrl(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { getAssetsUrl } from "@/utils/load_asstes.js"
  import tabbarData from "@/assets/data/tabbarData"
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  

  const currentIndex = ref(0)
  const router = useRouter()
  function tabbarItemClick(index, item) {
    currentIndex.value = index
    router.push(item.path)
  }
  
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

      &.active {
        color: var(--primary-color);
      }

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
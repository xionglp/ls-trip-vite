<template>
  <div class="city full-page">
    <!-- 1.搜索框 -->
    <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置"
      shape="round"
      show-action
      @cancel="onCancel"
    />

    <!-- 2. tabs切换 -->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>

  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter()

  const searchValue = ref("")
  const onCancel = () => {
    router.back()
  }

  const tabActive = ref()

</script>

<style lang="less" scoped>

</style>
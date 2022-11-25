<template>
  <div class="city full-page">
    <div class="top">
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
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from 'pinia';
import cityGroup from './components/city-group.vue';

const router = useRouter()

const searchValue = ref("")
const onCancel = () => {
  router.back()
}

const tabActive = ref()
/** 
 * 1.如果请求太多，那么页面组件中就包含大量的对于网络请求和数据的逻辑处理
 * 2.如果页面封装了很多的子组件，子组件需要这些数据，我们必须一步步将数据传导过去
 * 解决方法: 将网络请求封装到stores中
*/
// getAllCityData().then(res => {
//   console.log(res)
// })

const cityStore = useCityStore()
cityStore.fetchAllCitiesAction()
const { allCities } = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang="less" scoped>
  .city {
    .top {
      position: relative;
      z-index: 9;
    }

    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }
</style>
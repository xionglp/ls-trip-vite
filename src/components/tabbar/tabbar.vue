<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData" :key="item.path">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetsUrl(item.image)" alt="">
            <img v-else :src="getAssetsUrl(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getAssetsUrl } from "@/utils/load_asstes.js"
import tabbarData from "@/assets/data/tabbarData"

const currentIndex = ref(0)
const route = useRoute()
watch(route, (newValue) => {
  const index = tabbarData.findIndex(item => item.path === newValue.path)
  if (index === -1) return
  currentIndex.value = index
})

</script>

<style lang="less" scoped>
.tabbar {
  // 方法二: 局部定义一个变量，只针对.tab-bar子元素才生效
  // --van-tabbar-item-icon-size: 30px;

  // 方法三: 找到类，对类中的css属性进行重写
  // :deep(.van-tabbar-item__icon) {
  //   font-size: 35px;
  // }
  img {
    height: 28px;
  }
}
</style>
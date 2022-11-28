<template>
  <div class="detail full-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <detail-swipe />
    
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import useDetailStore from "@/stores/modules/detail"
import { storeToRefs } from 'pinia';
import DetailSwipe from "./components/detail-swipe.vue"

const route = useRoute()
const router = useRouter()
console.log(route.params.id)

const onClickLeft = () => {
  router.back()
}

const detailStore = useDetailStore()
detailStore.fetchGetDetailInfoAction(route.params.id)
const { swipeData } = storeToRefs(detailStore)


</script>

<style lang="less" scoped>

</style>
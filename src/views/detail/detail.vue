<template>
  <div class="detail full-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="main" v-if="swipeData.length > 0">
      <detail-swipe />
      <detail-infos></detail-infos>
      <detail-facility></detail-facility>
      <detail-landload></detail-landload>
      <detail-comment></detail-comment>
      <detail-notice></detail-notice>
      <detail-map></detail-map>
      <detail-intro></detail-intro>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import useDetailStore from '@/stores/modules/detail';
import { storeToRefs } from 'pinia';
import DetailSwipe from "./components/detail-swipe.vue"
import DetailInfos from "./components/detail-infos.vue"
import DetailFacility from "./components/detail-facility.vue"
import DetailLandload from "./components/detail-landload.vue"
import DetailComment from "./components/detail-comment.vue"
import DetailNotice from "./components/detail-notice.vue"
import DetailMap from "./components/detail-map.vue"
import DetailIntro from "./components/detail-intro.vue"

const route = useRoute()
const router = useRouter()
console.log(route.params.id)

const onClickLeft = () => {
  router.back()
}

const detailStore = useDetailStore()
detailStore.fetchGetDetailInfoAction(route.params.id)
const { swipeData, detailInfo } = storeToRefs(detailStore)

</script>

<style lang="less" scoped>

</style>
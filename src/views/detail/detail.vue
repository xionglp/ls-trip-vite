<template>
  <div class="detail full-page" ref="detailRef">
    <tab-control 
      class="tabs"
      v-if="isShowTabControl" 
      :titles="names" 
      @item-click="onTabControlItemClick"
    />

    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="main" v-if="swipeData.length > 0" v-memo="[detailInfo]">
      <detail-swipe />
      <detail-infos name="描述" :ref="getSectionRef" />
      <detail-facility name="设施" :ref="getSectionRef" />
      <detail-landload name="房东" :ref="getSectionRef" />
      <detail-comment name="评论" :ref="getSectionRef" />
      <detail-notice name="须知" :ref="getSectionRef" />
      <detail-map name="周边" :ref="getSectionRef" />
      <detail-intro />
    </div>

    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useDetailStore from '@/stores/modules/detail';
import { storeToRefs } from 'pinia';
import  useScroll  from "@/hooks/useScroll"

import TabControl from "@/components/tab-control/tab-control.vue"
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

// tabControl相关操作
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const isShowTabControl = computed(() => {
  return scrollTop.value >= 300
})

const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}
const onTabControlItemClick = (index) => {
  // 1.获取对应index的el元素
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  // 2.获取对应的滚动距离
  let instance = el.offsetTop
  if (index !== 0) instance = instance - 44
  detailRef.value.scrollTo({
    top: instance,
    behavior: "smooth"
  })
}

</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
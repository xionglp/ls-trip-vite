<template>
  <div class="home">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue"
import useDetailStore from "@/stores/modules/detail";
import { storeToRefs } from "pinia";
const detailStore = useDetailStore()
const { position } = storeToRefs(detailStore)

</script>

<style lang="less" scoped>
.baidu {
  height: 250px;
}
</style>
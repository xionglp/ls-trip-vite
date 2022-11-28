<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active }">
        <!-- <div class="indicator">{{ active }}/{{ swipeData.length }}-{{total}}</div> -->
        <div class="indicator">
          <template v-for="(value, key) in swipeGroup" :key="key">
            <span class="item" :class="{active: swipeData[active]?.enumPictureCategory == key}">
              <span class="text">{{getName(value[0].title)}}</span>
              <span 
                class="count" 
                v-if="swipeData[active]?.enumPictureCategory == key"
              >
               {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import useDetailStore from '@/stores/modules/detail';

const detailStore = useDetailStore()
const { swipeData } = storeToRefs(detailStore)

// 对数据进行处理
const swipeGroup = {}
for (const item of swipeData.value) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}
console.log(swipeGroup)

// 定义转换数据的方法
const getName = (name) => {
  return name.replace("：", "").replace("【", "").replace("】", "")
}

const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}

</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      color: #fff;
      background: rgba(0, 0, 0, .8);

      .item {
        margin: 0 3px;
        font-size: 12px;

        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
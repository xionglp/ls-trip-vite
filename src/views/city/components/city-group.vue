<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="city" @click="onClickCity(item)">{{ item.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="onClickCity(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  groupData: {
    type: Object,
    default: () =>({})
  }
})

const indexList = computed(()=> {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

const cityStore = useCityStore()
const router = useRouter()
const onClickCity = (city) =>{
  // 1.将选中的city数据保存到stores中
  cityStore.currentCity = city
  // 2.返回上一页
  router.back()
}

</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  .city {
    width: 70px;
    height: 28px;
    background-color: #fff4ec;
    text-align: center;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    margin: 6px 0;
  }
}

</style>
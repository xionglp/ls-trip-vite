<template>
  <div class="search-box">
    <!-- 1.位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 2.日期范围 -->
    <div class="section date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCalendar"
      type="range" 
      :round="false"
      color="#ff9854"
      :show-confirm="false"
      @confirm="onConfirm" 
    />

    <!-- 3.价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 4.关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 5.热门推荐 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div 
          class="item" 
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 6.搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="onSearchClick" >开始搜索</div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router"
import useMianStore from "@/stores/modules/main";
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";
import { formatMonthDay, getDiffDays } from "@/utils/format_date"

const router = useRouter()

// 位置/城市
const cityClick = () => {
  router.push("/city")
}

// 定位
const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取位置成功:", res)
  }, (err) => {
    console.log("获取位置失败:", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 日期范围处理
const mainStore = useMianStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stayCount = computed(() => getDiffDays(startDate.value, endDate.value))

const showCalendar = ref(false)
const onConfirm = (values) => {
  // 1.设置日期
  const selectStartDate = values[0]
  const selectEndDate = values[1]
  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  // 2.隐藏日历
  showCalendar.value = false
}

const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

const onSearchClick = () => {
  //跳转搜索页面，并且传递参数
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}

</script>

<style lang="less" scoped>
.location {
  display: flex;
  height: 44px;
  margin: 0 20px;
  align-items: center;

  .city {
    flex: 1;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      font-size: 12px;
      position: relative;
      top: 1px;
    }

    img {
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }
}

.search-box {
  --van-calendar-popup-height: 100%;
  // :deep(.van-popup--bottom.van-popup--round) {
  //   border-radius: 0;
  // }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid  var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
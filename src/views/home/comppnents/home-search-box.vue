<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

// 位置/城市
const cityClick = () => {
  router.push("/city")
}

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
</style>
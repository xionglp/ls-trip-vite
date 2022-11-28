import { defineStore } from  "pinia"
import { getDetailInfo } from "@/services/index"

const useDetailStore = defineStore("detail", {
  state: () => ({
    detailInfo: {},
    swipeData: []
  }),
  getters: {

  },
  actions: {
    async fetchGetDetailInfoAction(houseId) {
      const res = await getDetailInfo(houseId)
      console.log("请求成功",res.data)
      this.detailInfo = res.data
      this.swipeData = this.detailInfo.mainPart.topModule.housePicture.housePics
    }
  }
})

export default useDetailStore
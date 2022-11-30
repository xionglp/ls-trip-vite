import { defineStore } from  "pinia"
import { getDetailInfo } from "@/services/index"

const useDetailStore = defineStore("detail", {
  state: () => ({
    detailInfo: {},
    swipeData: [], // 轮播图数据
    topModule: {}, 
    houseFacility: {},
    landlord: {},
    comment: {},
    orderRules: {},
    position: {},
    priceIntro: {}
  }),
  getters: {

  },
  actions: {
    async fetchGetDetailInfoAction(houseId) {
      this.swipeData = []
      const res = await getDetailInfo(houseId)
      // console.log("请求成功",res.data)
      this.detailInfo = res.data
      const mainPart = this.detailInfo.mainPart
      this.swipeData = mainPart.topModule.housePicture.housePics
      this.topModule = mainPart.topModule
      this.houseFacility = mainPart.dynamicModule.facilityModule.houseFacility
      this.landlord = mainPart.dynamicModule.landlordModule
      this.comment = mainPart.dynamicModule.commentModule
      this.orderRules = mainPart.dynamicModule.rulesModule.orderRules
      this.position = mainPart.dynamicModule.positionModule
      this.priceIntro = mainPart.introductionModule
    }
  }
})

export default useDetailStore
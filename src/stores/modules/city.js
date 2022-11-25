import { getAllCityData } from "@/services"
import { defineStore } from "pinia"

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: "深圳"
    }
  }),
  getters: {

  },
  actions: {
    // 获取所有的城市信息
    async fetchAllCitiesAction() {
      const res = await getAllCityData()
      this.allCities = res.data
    }
  }
})

export default useCityStore
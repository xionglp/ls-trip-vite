import { defineStore } from "pinia"
import { getHomeHotSuggests, getHomeCategories, getHomeHouseList } from "@/services"

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseLists: []
  }),
  actions: {
    async fetchGetHomeSuggestsActions() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchGetHomeCategoriesActions() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    // async 默认会返回一个Promise
    async fetchGetHomeHouseListAction() {
      const res = await getHomeHouseList(this.currentPage)
      this.houseLists.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore
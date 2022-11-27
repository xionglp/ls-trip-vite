import { defineStore } from "pinia"
import { getHomeHotSuggests } from "@/services"

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: []
  }),
  actions: {
    async fetchGetHomeSuggestsActions() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore
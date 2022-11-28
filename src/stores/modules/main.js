import { defineStore } from "pinia";


const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 2)

const useMianStore = defineStore("main", {
  state: () =>({
    token: "",
    isLoading: false,
    startDate: startDate,
    endDate: endDate
  })
})

export default useMianStore
import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"

export default function useScroll() {
  const isReachBottom = ref(false) // 记录是否滚动到底部
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  // throttle 节流函数，按照固定的时间间隔执行函数
  // 不管这中间有多少次触发这个事件，执行函数的频次总是固定的
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    // 已经滚动到底部，加载下一页更多数据
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("滚动到底部了")
      isReachBottom.value = true
    }
  }, 100)
  
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
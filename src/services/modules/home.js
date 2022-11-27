import lsRequest from "../request"

// 请求热门推荐数据
export function getHomeHotSuggests() {
  return lsRequest.get({
    url: "/home/hotSuggests"
  })
}
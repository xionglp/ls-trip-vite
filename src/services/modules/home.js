import lsRequest from "../request"

// 请求热门推荐数据
export function getHomeHotSuggests() {
  return lsRequest.get({
    url: "/home/hotSuggests"
  })
}

// 请求首页分类数据
export function getHomeCategories() {
  return lsRequest.get({
    url: "/home/categories"
  })
}

// 请求首页列表数据（分页查询）
export function getHomeHouseList(currentPage = 1) {
  return lsRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
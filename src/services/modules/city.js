import lsRequest from "../request"

// 请求所有城市数据
export function getAllCityData() {
  return lsRequest.get({
    url: "/city/all"
  })
}
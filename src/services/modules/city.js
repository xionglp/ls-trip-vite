import lsRequest from "../request"

export function getAllCityData() {
  return lsRequest.get({
    url: "/city/all"
  })
}
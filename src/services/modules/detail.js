import lsRequest from '../request'

export function getDetailInfo(houseId) {
  return lsRequest.get({
    url: "/detail/infos",
    params: {
      houseId: houseId
    }
  })
}
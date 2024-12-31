import request from "@/utils/request";

// 查询岗位列表
export function listNetwork(data) {
  return request({
    url: "/system/network/list",
    method: "post",
    data: data,
  });
}

export function uploadImg(data) {
  return request({
    url: "/system/user/profile/addBusinessLicense",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  });
}

// 查询岗位详细
export function getNetwork(postId) {
  return request({
    url: "/system/network/" + postId,
    method: "get",
  });
}

// 新增岗位
export function addNetwork(data) {
  return request({
    url: "/system/network",
    method: "post",
    data: data,
  });
}

// 修改岗位
export function updateNetwork(data) {
  return request({
    url: "/system/network",
    method: "put",
    data: data,
  });
}

// 删除岗位
export function delNetwork(postId) {
  return request({
    url: "/system/network/" + postId,
    method: "delete",
  });
}

// 根据网点查询物流公司
export function getCompanyByNetworkId(networkId) {
  return request({
    url: "/system/company/networkId?networkId=" + networkId,
    method: "get",
  });
}

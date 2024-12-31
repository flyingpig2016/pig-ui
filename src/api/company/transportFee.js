import request from "@/utils/request";

// 查询岗位列表
export function listFee(data) {
  return request({
    url: "/system/fee/list",
    method: "post",
    data: data,
  });
}

export function uploadImg(data) {
  return request({
    url: '/system/user/profile/addBusinessLicense',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  });
}

// 查询岗位详细
export function getFee(postId) {
  return request({
    url: "/system/fee/" + postId,
    method: "get",
  });
}

// 新增岗位
export function addFee(data) {
  return request({
    url: "/system/fee",
    method: "post",
    data: data,
  });
}

// 修改岗位
export function updateFee(data) {
  return request({
    url: "/system/fee",
    method: "put",
    data: data,
  });
}

// 删除岗位
export function delFee(postId) {
  return request({
    url: "/system/fee/" + postId,
    method: "delete",
  });
}

import request from "@/utils/request";

// 查询岗位列表
export function listCompany(data) {
  return request({
    url: "/system/company/list",
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
export function getCompany(postId) {
  return request({
    url: "/system/company/" + postId,
    method: "get",
  });
}

// 新增岗位
export function addCompany(data) {
  return request({
    url: "/system/company/add",
    method: "post",
    data: data,
  });
}

// 修改岗位
export function updateCompany(data) {
  return request({
    url: "/system/company/edit",
    method: "put",
    data: data,
  });
}

// 删除岗位
export function delCompany(postId) {
  return request({
    url: "/system/company/" + postId,
    method: "delete",
  });
}

//绑定网点
export function transportNetwork(data) {
  return request({
    url: "/system/transportNetwork",
    method: "post",
    data: data,
  });
}
// 解除绑定网点
export function unlinkNetwork(data) {
  return request({
    url: "/system/transportNetwork/removeTransportNetwork",
    method: "post",
    data: data,
  });
}

//根据物流公司id查询该物流公司网点
export function getNetWorkByCompanyId(companyId) {
  return request({
    url: "/system/network/companyId?companyId=" + companyId,
    method: "get",
  });
}

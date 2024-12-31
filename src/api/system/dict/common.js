import request from '@/utils/request';

export function getProvince(query) {
    return request({
        url: '/system/code/getProvince',
        method: 'get',
        params: query
    });
}

export function getCity(query) {
    return request({
        url: '/system/code/getCity',
        method: 'get',
        params: query
    });
}

export function getVillage(query) {
    return request({
        url: '/system/code/getVillage',
        method: 'get',
        params: query
    });
}
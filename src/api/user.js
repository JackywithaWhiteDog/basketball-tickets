import request from '../utils/request'

export function signup(data) {
  return request({
    url: '/signup',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/api/logout',
    method: 'post',
  })
}
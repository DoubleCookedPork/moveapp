import axios from 'axios'
// create有册封封装的意思就是复制了一个axios实例，名字是request
// 原因：可以拥有多个不同的请求函数，而他们的配置可能是不一样的
// 例如：有些项目中可能使用到不同的接口路径
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
  // baseURL: 'http://toutiao.coures.itcast.cn'
})
// 添加一个请求拦截器
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加一个响应拦截器
request.interceptors.response.use(function (response) {
  // 在响应的数据中如果有data则返回这个data数据
  // 如果没有data，则不作任何处理，返回这个数据
  return response.data.data || response.data
}, function (error) {
  return Promise.reject(error)
})
export default request

// 将本地存储中的用户数据信息封装为一个模块

// 把数据存储到本地
const USER_KEY = 'user'

export const getUser = () => {
  // 因为下面获取到的是一个字符串，所以需要使用json.parse转成json格式
  // window.localStorage.getItem(USER_KEY)
  return JSON.parse(window.localStorage.getItem(USER_KEY))
}
// 修改
export const saveUser = (data) => {
  // 修改的时候有两个值，前面的是你已经存储到本地的信息，
  // 把后面传入的信息变成json格式的字符串重新存入到本地中，
  // 因为传入的data是一个对象所以需要用json。stringify转换成json格式的字符串
  window.localStorage.setItem(USER_KEY, JSON.stringify(data))
}
// 删除
export const removeUser = () => {
  window.localStorage.removeItem(USER_KEY)
}

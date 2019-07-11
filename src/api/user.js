// 引入疯转的request请求
import request from '@/utils/request'

export const login = ({
  mobile,
  code
}) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}

<template>
  <div>
    <van-nav-bar title="标题" />
    <form action="">
      <van-cell-group>
        <van-field v-model="user.mobile"
                   required
                   clearable
                   v-validate="'required |mine11'"
                   name="mobile"
                   :erroer-message="errors.first('mobile')"
                   label="手机号"
                   placeholder="请输入手机号"
                   :error-message="mobileMessage" />
        <van-field v-model="user.code"
                   v-validate="'required |mine6'"
                   name="code"
                   :erroer-message="errors.first('code')"
                   type="password"
                   label="验证码"
                   placeholder="请输入密码"
                   required />
      </van-cell-group>
      <div class="van-btn">
        <van-button class="btn"
                    type="info"
                    @click.prevent="hangdleLogin"
                    :loading="loginLoading">登录</van-button>
      </div>
    </form>
    <div class="bot">
      <a href="#">隐私条款</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '18201497629',
        code: '246810'
      },
      mobileMessage: '',
      loginLoading: false // 控制登录请求loading状态
    }
  },
  created () {
    this.configCustomMessages()
  },
  methods: {
    configCustomMessages () {
      const dict = {
        custom: {
          mobile: {
            required: '手机号不能为空'
          },
          code: {
            required: () => '验证码不能为空'
          }
        }
      }
      this.$validator.localize('zh_CN', dict)
    },
    async hangdleLogin () {
      this.loginLoading = true
      try {
        const valid = await this.$validator.validate()
        // 如果表单验证失败，则什么都不做
        if (!valid) {
          this.loginLoading = false
          return
        }
        const data = await login(this.user)
        // 通过提交mutation更新Vuex容器中的状态
        this.$store.commit('setUser', data)
        this.$router.push({ name: 'home' })
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败')
      }
      this.loginLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.van-btn {
  padding: 30px 10px;
  .btn {
    width: 100%;
  }
}
.bot {
  margin-top: 300px;
  text-align: center;
  a {
    font-size: 10px;
  }
}
</style>

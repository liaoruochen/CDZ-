<template>
  <div class="weui-cells weui-cells_form">
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
        <div class="weui-cell__bd">
            <input v-model="phoneNumber" class="weui-input" type="number" placeholder="请输入手机号">
        </div>
    </div>
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
            <input v-model="password" class="weui-input" type="password" minlength="6" maxlength="6" placeholder="请输入密码（6位）">
        </div>
    </div>
    <button @click="login" class="weui-btn weui-btn_primary">注册</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phoneNumber: null,
      password: null,
      openid: null
    }
  },
  created () {
    wx.getStorage({
      key: 'openid',
      success: (res) => {
        this.openid = res.data
      }
    })
  },
  methods: {
    login () {
      if (!this.phoneNumber) {
        wx.showToast({
          title: '请输入手机号',
          icon: 'none',
          duration: 2000
        })
      } else if (!this.password) {
        wx.showToast({
          title: '请输入密码',
          icon: 'none',
          duration: 2000
        })
      } else {
        const phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
        if (!phoneReg.test(this.phoneNumber)) {
          wx.showToast({
            title: '手机号格式错误',
            icon: 'none',
            duration: 2000
          })
        } else if (this.password.length < 6) {
          wx.showToast({
            title: '密码应为6位',
            icon: 'none',
            duration: 2000
          })
        } else {
          wx.request({
            url: 'https://www.easy-mock.com/mock/5b76815a256d235b2a56f22b/inter/saveUserinfo.action',
            data: {
              openid: this.openid,
              phone: this.phoneNumber,
              pwd: this.password
            },
            header: {
              'content-type': 'application/json'
            },
            success (res) {
              console.log(res)
              wx.showToast({
                title: '注册成功',
                icon: 'success',
                duration: 2000
              })
              wx.setStorage({
                key: 'login',
                data: 'true'
              })
              wx.switchTab({
                url: '../me/main'
              })
            }
          })
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .weui-label {
    width: 150rpx;
  }
</style>

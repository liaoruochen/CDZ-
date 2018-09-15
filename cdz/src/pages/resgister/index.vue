<template>
  <div class="weui-cells weui-cells_form">
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="number" placeholder="请输入手机号">
        </div>
    </div>
    <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入密码（6位）">
        </div>
    </div>
    <button @click="login" class="weui-btn weui-btn_primary">注册</button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      wx.switchTab({
        url: '../me/main'
      })
    }
  }
}
</script>

<style lang='less' scoped>
  .weui-label {
    width: 150rpx;
  }
</style>

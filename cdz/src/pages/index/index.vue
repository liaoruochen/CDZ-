<template>
  <div class="container">
    <div class="box">
      <p class="remind">温馨提示</p>
      <p class="please">请允许微信授权以使用更多功能</p>
      <button open-type='getUserInfo' class="weui-btn weui-btn_plain-primary btn" @getuserinfo="bindgetuserinfo">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    bindgetuserinfo (e) {
      if (e.target.userInfo) {
        wx.setStorage({
          key: 'isGetUserInfo',
          data: 'true',
          success: function (res) {
          }
        })
        this.$emit('issq', false)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity .3s;
  z-index: 999;

  .box {
    width: 600rpx;
    height: 300rpx;
    margin: 0 auto;
    margin-top: 50%;
    border-radius: 20rpx;
    background-color: #fff;
    position: relative;


    .remind {
      text-align: center;
      font-size: 42rpx;
      padding-top: 20rpx;
    }
    .please {
      text-align: center;
      font-size: 28rpx;
      margin-top: 20rpx;
      color: #888888;
    }
    .btn {
      position: absolute;
      bottom: 20rpx;
      width: 500rpx;
      margin-left: 50rpx;
    }
  }
}
</style>

<template>
  <div class="comtainer" v-show="userInfo">
    <div class="box">
      <p class="remind">温馨提示</p>
      <p class="please">请允许微信授权以使用更多功能</p>
      <button open-type='getUserInfo' class="weui-btn weui-btn_plain-primary btn" @bindgetuserinfo="bindGetUserInfo">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: true,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },
  onLoad: function () {
    console.log(1)
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.record']) {
          this.userInfo = false
          wx.switchTab({
            url: 'main'
          })
        }
      }
    })
  },
  components: {},
  methods: {
    bindGetUserInfo: function (e) {
      console.log(e)
      if (e.detail.userInfo) {
        // 用户按了允许授权按钮
        console.log('yunxu')
      } else {
        // 用户按了拒绝按钮
        console.log('quxiao')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comtainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #808080;
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

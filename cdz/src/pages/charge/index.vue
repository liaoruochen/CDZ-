<template>
  <div class="charge">
    <div class="charge__title">扫描充电桩上的二维码开启充电</div>
    <div class="charge_desc" @click="resgister">
      <img src="../../../static/img/about1.png" style="width:30rpx;height:30rpx;" alt="提示">
      <span style="padding-left:10rpx">需要注册才能扫码充电 ></span>
    </div>
    <div class="charge__pic" @click="scavenging">
      <img src="../../../static/img/scavenging.png" style="width:200rpx;height:200rpx" alt="扫码">
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    scavenging () {
      wx.scanCode({
        success: function (res) {
          console.log(res)
        }
      })
    },
    resgister () {
      wx.navigateTo({
        url: '/pages/resgister/main',
        success: function (res) {
          // success
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.charge {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .charge__title {
    padding-top: 100rpx;
    font-size: 36rpx;
    font-weight: 500;
    text-align: center;
  }
  .charge_desc {
    font-size: 30rpx;
    margin-top: 40rpx;
    color: #555555;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .charge__pic {
    width: 200rpx;
    height: 200rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    animation: hovertreemove 1s linear infinite alternate;
  }
  @keyframes hovertreemove {
    from {top:50%;}
    to {top:55%;}
  }
}
</style>

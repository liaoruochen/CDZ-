<template>
  <div class="charge">
    <Index v-if="isUserInfo" @issq="issq"></Index>
    <div class="charge__title">扫描充电桩上的二维码开启充电</div>
    <div class="charge_desc" @click="resgister">
      <img src="../../../static/img/about1.png" style="width:30rpx;height:30rpx;" alt="提示">
      <span style="padding-left:10rpx">需要注册才能扫码充电 ></span>
    </div>
    <div class="charge__pic" @click="scavenging">
      <img src="../../../static/img/scavenging.png" style="width:200rpx;height:200rpx" alt="扫码">
    </div>
    <div class="charge__operation">
      <div class="operation">
        <img src="../../../static/img/my__charge__info.png" style="width:50rpx;height:50rpx" alt=""/>
      </div>
      <div class="operation">
        <img src="../../../static/img/recently__used.png" style="width:50rpx;height:50rpx"  alt=""/>
      </div>
      <div class="operation">
        <img src="../../../static/img/input.png" style="width:50rpx;height:50rpx"  alt=""/>
      </div>
    </div>
  </div>
</template>
<script>
import Index from '@/pages/index'
export default {
  data () {
    return {
      isUserInfo: true
    }
  },
  created () {
    wx.getStorage({
      key: 'isGetUserInfo',
      success: (res) => {
        if (res.data === 'true') {
          this.isUserInfo = false
        }
      }
    })
  },
  components: {
    Index
  },
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
    },
    issq () {
      this.isUserInfo = false
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
  .charge__operation {
    position: absolute;
    bottom: 80rpx;
    left: 56rpx;
    .operation {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      border: 1px solid #ccc;
      margin-bottom: 34rpx;
      text-align: center;
      line-height: 100rpx;
    }
  }
}
</style>

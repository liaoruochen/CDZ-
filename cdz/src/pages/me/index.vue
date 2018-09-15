<template>
  <div>
    <div class="weui-cells">
      <div class="header">
        <div class="head">
          <img :src="avatarUrl" alt="">
        </div>
        <p class="name">{{nickName}}</p>
      </div>
      <a class="weui-cell weui-cell_access" href="../userInfo/main">
        <div class="weui-cell__bd">
          <img class="miniHead" src="../../../static/img/user.png" alt="">
          <p>个人信息</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
      <a class="weui-cell weui-cell_access" href="../money/main">
        <div class="weui-cell__bd">
          <img class="miniHead" src="../../../static/img/purse.png" alt="">
          <p>我的钱包</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
      <a class="weui-cell weui-cell_access" href="../gerenzhuang/main">
        <div class="weui-cell__bd">
          <img class="miniHead" src="../../../static/img/module.png" alt="">
          <p>个人桩信息</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
      <a class="weui-cell weui-cell_access" href="../opinion/main">
        <div class="weui-cell__bd">
          <img class="miniHead" src="../../../static/img/opinion.png" alt="">          
          <p>意见反馈</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
      <a class="weui-cell weui-cell_access" href="../about/main">
        <div class="weui-cell__bd">
          <img class="miniHead" src="../../../static/img/about.png" alt="">          
          <p>关于我们</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickName: '',
      avatarUrl: ''
    }
  },
  async mounted () {
    await wx.getUserInfo({
      success: (res) => {
        this.nickName = res.userInfo.nickName
        this.avatarUrl = res.userInfo.avatarUrl
      }
    })
  }
}
</script>

<style lang='less' scoped>
  .header {
    width: 100%;
    height: 200rpx;
    text-align: center;
    .head {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      border: 1rpx solid #888888;
      display: inline-block;
      margin: 0 auto;
      margin-top: 20rpx;
      img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
      }
    }
  }
  .weui-cell__bd {
    display: flex;
    align-items: center;
    .miniHead {
      width: 50rpx;
      height: 50rpx;
      margin-right: 20rpx;
    }
  }

</style>

<template>
  <div class="container">
    <p>温馨提示</p>
    <p>请允许微信授权以使用更多功能</p>
    <button @click="getUserInfo">确定</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userInfo: {}
    }
  },

  components: {
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
      console.log('22')
    }
  }
}
</script>

<style scoped>
  .container {
    
  }
</style>

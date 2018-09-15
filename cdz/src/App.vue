<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success (res) {
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
            data: {
              appid: 'wx10776deea4729376',
              secret: 'dc849d8b56b41aaaa65d798d08925fdd',
              js_code: res.code,
              grant_type: 'authorization_code'
            },
            success (res) {
              const openid = res.data.openid
              const session = res.data.session_key
              wx.setStorage({
                key: 'openid',
                data: openid
              })
              wx.setStorage({
                key: 'session_key',
                data: session
              })
            }
          })
        }
      }
    })
  }
}
</script>

<style>
</style>

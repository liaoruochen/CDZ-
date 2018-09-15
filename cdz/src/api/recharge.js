export const recharge = () => {
  wx.request({
    url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
    methods: 'POST',
    data: {
      appid: 'wx10776deea4729376',
      mch_id: '1513106601',
      nonce_str: ``,
      sign: ``,
      body: '',
      out_trade_no: '',
      total_fee: '',
      spbill_create_ip: '',
      notify_url: '',
      trade_type: ''
    },
    success (res) {
      console.log(res)
    }
  })
}

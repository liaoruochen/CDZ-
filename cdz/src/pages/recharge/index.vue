<template>
  <div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">金额（元）</label></div>
        <div class="weui-cell__bd">
            <input v-model="rechargeMoney" class="weui-input" type="number" placeholder="请输入充值金额">
        </div>
      </div>
    </div>
    <button :disabled="isAgree" class="weui-btn weui-btn_primary" @click="charge">充值</button>
    <div class="footer">
      <input type="checkbox" v-model="ischeck" :checked = true @click="check" />
      <p>点击立即充值，即表示您已阅读并同意<span class="xieyi">《充值协议》</span></p>
    </div>
  </div>
</template>

<script>
import { recharge } from '@/api/recharge.js'
export default {
  data () {
    return {
      isAgree: false,
      ischeck: '',
      rechargeMoney: null
    }
  },
  methods: {
    check () {
      if (this.isAgree === true) {
        this.isAgree = false
      } else {
        this.isAgree = true
      }
    },
    charge () {
      recharge()
    }
  }
}
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    height: 70rpx;
    position: absolute;
    bottom: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
      font-size: 25rpx;

      .xieyi {
        color: green
      }
    }
  }
</style>

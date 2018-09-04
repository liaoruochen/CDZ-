<template>
  <div class="weui-cells">
    <div class="box">
      <p class="yuer">账户余额</p>
      <p class="money">500.00元</p>
      <div class="recharge">
        <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">充值</a>
      </div>
    </div>
    <a class="weui-cell weui-cell_access" href="javascript:;">
      <div class="weui-cell__bd">
          <p>消费明细</p>
      </div>
      <div class="weui-cell__ft">
      </div>
    </a>
    <a class="weui-cell weui-cell_access" href="javascript:;">
      <div class="weui-cell__bd">
          <p>充值记录</p>
      </div>
      <div class="weui-cell__ft">
      </div>
    </a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .box {
    height: 180rpx;

    .yuer {
      font-size: 38rpx;
      text-align: center;
      margin-top: 10rpx;
    }
    .money {
      font-size: 28rpx;
      text-align: center;
    }
    .recharge {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .weui-btn {
      margin: 0 auto;
      margin-top: 15rpx;
    }
  }
</style>

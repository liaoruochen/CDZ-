<template>
  <div class="weui-cells">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <p>手机号</p>
      </div>
      <div class="weui-cell__ft">{{phone}}</div>
    </div>
    <a class="weui-cell weui-cell_access" href="javascript:;">
      <div class="weui-cell__bd">
          <p>修改密码</p>
      </div>
      <div class="weui-cell__ft">
      </div>
    </a>
    <div class="weui-cell" v-if="isident">
      <div class="weui-cell__bd">
        <p>实名认证</p>
      </div>
      <div class="weui-cell__ft">已认证</div>
    </div>
    <a class="weui-cell weui-cell_access" v-else href="javascript:;">
      <div class="weui-cell__bd">
          <p>实名认证</p>
      </div>
      <div class="weui-cell__ft">未认证</div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: 13723827382,
      isident: false
    }
  }
}
</script>

<style>

</style>

<template>
<div>
  <div class="weui-cells weui-cells_form">
    <div class="weui-cell">
        <div class="weui-cell__bd">
            <textarea class="weui-textarea" placeholder="请输入意见建议..." rows="2"></textarea>
        </div>
    </div>
  </div>
  <button class="weui-btn" style="background:#1296db;width:80%" @click="handlerOpinion">提交</button>
</div>
</template>

<script>
export default {
  methods: {
    handlerOpinion () {
      wx.request({
        url: 'https://www.easy-mock.com/mock/5b76815a256d235b2a56f22b/inter/saveOpinion.action',
        data: {},
        method: 'GET',
        success: function (res) {
          console.log(res)
        }
      })
    }
  }
}
</script>

<style>

</style>

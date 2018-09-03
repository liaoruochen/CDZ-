<template>
  <div class="weui-cells">
    <div class="weui-cell">
      <div class="info">
        <span>桩编号:</span>
        <span></span>
      </div>
      <div class="info">
        <span>小区 :</span>
        <span></span>
      </div>
      <div class="info">
        <span>桩状态:</span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.weui-cell {
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info {
  width: 100%;
  flex: 1;
}
</style>

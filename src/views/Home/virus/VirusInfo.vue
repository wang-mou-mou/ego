<template>
  <div>
    <p class="title">病毒信息</p>
    <p>{{ virusInfo.note1 }}</p>
    <p>{{ virusInfo.note2 }}</p>
    <p>{{ virusInfo.note3 }}</p>
    <p>{{ virusInfo.remark1 }}</p>
    <p>{{ virusInfo.remark2 }}</p>
    <p>{{ virusInfo.remark3 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    virusInfo: {
      type: Object,
    },
  },
};
</script>

<style lang='less' scoped>
div {
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.3rem;
  p {
    padding: 0 0.43rem 0.15rem;
    line-height: 0.4rem;
    color: #666;
    font-size: 0.28rem;
  }
  .title {
    color: rgb(70, 69, 69);
    font-size: 0.3rem;
    padding: 0.02rem 0.1rem;
    margin: 0.15rem;
    border-left: 0.1rem solid #4169e2;
  }
}
</style>
<template lang="html">
  <div class="outline">
    <div class="line-box"></div>
    <h3 class="title">{{title}}</h3>
    <slot name='product'></slot>
    <div class="more">
      <span>更多{{title}}</span>
      <span class="iconfont">&#xe635;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/function.scss';
  .line-box {
    background-color: #f2f2f2;
    height: px2rem(10px);
    width: 100%;
  }
  .title {
    @include font-dpr(18px);
    margin: px2rem(36px) 0 px2rem(36px) px2rem(25px);
  }
  .more {
    display: flex;
    justify-content: center;
    color: #ccc;
    span {
      @include font-dpr(12px);
      display: inline-block;
    }
  }
</style>

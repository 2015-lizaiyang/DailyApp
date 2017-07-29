<template lang="html">
    <ul class="nav-box">
      <li v-for="vo in nav">
        <span class="iconfont nav-icon" v-html="vo.icon"></span>
        <span>{{vo.navName}}</span>
      </li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {icon: '&#xe637;', navName: '首页', route: '/'},
        {icon: '&#xe62f;', navName: '分类', route: '/classify'},
        {icon: '&#xe660;', navName: '品味', route: '/taste'},
        {icon: '&#xe617;', navName: '购物车', route: '/shoppingCcart'},
        {icon: '&#xe605;', navName: '个人', route: '/personage'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/function.scss';
.nav-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-color: #f9f9f9;
  height: px2rem(115px);
  overflow: hidden;
  border-top: 1px solid #c6c6c6;
  justify-content: space-between;
  li {
    @include font-dpr(12px);
    width: 20%;
    span {
      line-height: px2rem(40px);
      display: block;
      text-align: center;
      color: #7f7160;
    }
  }
}
.nav-icon {
  margin-bottom: 4px;
  @include font-dpr(20px);

}
</style>

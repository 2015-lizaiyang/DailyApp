<template lang="html">
  <div class="top-search">
    <span class="logo-box"></span>
    <div class="search">
      <input type="text" name="" placeholder='有品 · 6月出行季'/>
      <span class="iconfont search-icon">&#xe603;</span>
    </div>
    <span class='iconfont inform'>&#xe64c;</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/scss/function.scss';
  .top-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 px2rem(20px);
    margin-top: px2rem(25px);
    @at-root {
      .logo-box {
        width: px2rem(300px);
        height: px2rem(50px);
        background: url('../../../assets/images/logo.png') no-repeat center /contain;
      }
      .search {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: px2rem(63px);
        border-radius: 4px;
        margin: 0 px2rem(23px);
        border: px2rem(2px) solid #dadada;
        input[type='text'] {
          width: 100%;
          border: none;
          height: px2rem(63px);
          box-sizing: border-box;
          font-size: px2rem(26px);
          padding: 0 px2rem(10px) 0 px2rem(86px);
        }
        .search-icon {
          position: absolute;
          top: px2rem(14px);
          left: px2rem(24px);
          color: #cbcbcb;
          font-size: px2rem(40px);
        }
      }
      .inform {
        color: #cbcbcb;
        font-size: px2rem(50px);
      }
    }
  }
</style>

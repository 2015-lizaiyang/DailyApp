<template lang="html">
  <div class="index-box">
    <top></top>
    <!-- 滑动菜单 -->
    <menu-nav :menuList='menu'></menu-nav>
    <banner :bannerImg='bannerImg' :srcName="'images'"></banner>
    <div class="iconSvg">
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lipin"></use>
        </svg>
        <p>新人有礼</p>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chuang"></use>
        </svg>
        <p>人气众筹</p>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhongchou"></use>
        </svg>
        <p>夏凉床品</p>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shiwuqimin"></use>
        </svg>
        <p>智能米家</p>
      </span>
    </div>
    <product-crowd></product-crowd>
    <recommend></recommend>  
  </div>
</template>

<script>
import top from './components/topComponent/top.vue'
import menuNav from '../components/menu-nav/menu-nav.vue'
import banner from '../components/banner/banner.vue'
import productCrowd from './components/product-crowd.vue'
import recommend from './components/recommend.vue'
export default {
  data () {
    return {
      menu: [
        {name: '推荐'},
        {name: '家居'},
        {name: '日用'},
        {name: '家电'},
        {name: '智能'},
        {name: '影音'},
        {name: '服饰'},
        {name: '出行'},
        {name: '文创'},
        {name: '餐厨'},
        {name: '婴童'},
        {name: '配件'},
        {name: '众筹'},
        {name: '品牌'}
      ],
      bannerImg: []
    }
  },
  components: {
    top,
    menuNav,
    banner,
    productCrowd,
    recommend
  },
  mounted () {
    this.$axios.get('/static/Data/banner.json').then(response => {
      this.bannerImg = response.data.data
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/function';
  .index-box {
    overflow: hidden;
  }
  .iconSvg {
    display: flex;
    margin: px2rem(35px) px2rem(40px);
    justify-content: space-between;
    p {
      margin: px2rem(10px) 0 0 0;
      text-align: center;
      @include font-dpr(14px);
    }
  }
  .icon {
    display: inherit;
    vertical-align: center;
     width: px2rem(120px);
     height: px2rem(120px);
     fill: currentColor;
     overflow: hidden;
  }
</style>

<template>
  <div id="app">
    <router-view class=""></router-view>
    <nav-menu></nav-menu>
  </div>
</template>

<script>
import navMenu from './view/components/nav.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    navMenu
  },
  mounted () {
    document.ontouchmove = function (event) {
      // event.preventDefault()
    }
  }
}
</script>

<style lang='css'>
body {
  overflow-x: hidden;
}
body::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
@font-face {
  font-family: 'iconfont';  /* project id 323128 */
  src: url('//at.alicdn.com/t/font_xrlaz1ueo9psc3di.eot');
  src: url('//at.alicdn.com/t/font_xrlaz1ueo9psc3di.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_xrlaz1ueo9psc3di.woff') format('woff'),
  url('//at.alicdn.com/t/font_xrlaz1ueo9psc3di.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_xrlaz1ueo9psc3di.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>

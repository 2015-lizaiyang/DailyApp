<template lang="html">
  <div class="banner">
    <div class="img-list"
    @touchstart.stop='BannerStart($event)'
    @touchmove.stop='BannerMove($event)'
    @touchend='BannerEnd($event)'>
      <img v-for='item in bannerImg' :src="item.images" alt="">
    </div>
    <div class="control-sign">
      <span :class="{'sign-obvious': index === sign}" v-for='(vo, index) in bannerImg.length' @click='ControlPoint($event, index)'></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sign: 0,
      slideNode: null,
      touchBnner: null,
      timeBanner: null,
      transformVal: 0,
      Bootaran: true,
      slideImg: null,
      slideWidth: null,
      register: 0
    }
  },
  props: {
    bannerImg: {
      type: Array
    }
  },
  mounted () {
    this.slideNode = document.querySelector('.img-list')
  },
  updated () {
    const windowWidth = document.body.clientWidth
    this.slideNode.style.width = windowWidth * this.slideNode.children.length + 'px'
    Array.prototype.slice.call(this.slideNode.children).forEach((elem, index, arr) => {
      elem.style.width = windowWidth + 'px'
    })
    this.slideWidth = this.slideNode.offsetWidth
    this.slideImg = this.slideNode.querySelector('img').offsetWidth
  },
  methods: {
    BannerStart (event) {
      this.touchBnner = event.changedTouches[0].pageX
      this.timeBanner = Date.now()
    },
    BannerMove (event) {
      if (this.slideNode.style.getPropertyValue('transform') === '') {
        this.slideNode.style.transform = `translateX(0)`
      }
      const touchs = event.changedTouches[0].pageX
      const touchsval = touchs - this.touchBnner
      const slideNode = this.slideNode.style.getPropertyValue('transform').match(/-[0-9]+|[0-9]+/)[0]
      this.transformVal = touchsval / 8 + Number(slideNode)
      if (this.transformVal > 0) {
        const touchsvals = touchsval / 6
        this.slideNode.style.transform = `translateX(${touchsvals}px)`
      } else if (this.transformVal < this.slideImg - this.slideWidth) {
        const maxslideMove = touchsval / 3 + this.slideImg - this.slideWidth
        this.slideNode.style.transform = `translateX(${maxslideMove}px)`
      } else {
        this.slideNode.style.transform = `translateX(${this.transformVal}px)`
      }
    },
    BannerEnd (event) {
      const touchs = event.changedTouches[0]
      const maxslideMove = this.slideImg - this.slideWidth
      // 判断手指移动的方向做相应的操作
      if (touchs.pageX < this.touchBnner) {  // ←
        const judge = !(this.register === this.slideNode.children.length - 1)
        if (judge) {
          this.register ++
        } else {
          this.slideNode.style.transform = `translateX(${maxslideMove}px)`
        }
        this.sign = this.register
        const move = -(this.register * this.slideImg)
        this.transitionMove(this.slideNode, 'all 1s ease', move)
      } else {
        const rollback = !(this.register === 0)
        if (rollback) {
          this.register --
        } else {
          this.slideNode.style.transform = 'translateX(0)'
        }
        this.sign = this.register
        const move = -(this.register * this.slideImg)
        this.transitionMove(this.slideNode, 'all 1s ease', move)
      }
    },
    ControlPoint (event, index) {
      const move = -index * this.slideImg
      this.transitionMove(this.slideNode, 'all 1s ease', move)
      this.register = index
      this.sign = index
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/function';
  .banner {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .img-list {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    flex-grow: 1;
    img {
      display: inline-block;
      width: 100%;
    }
  }
  .control-sign {
    display: flex;
    position: absolute;
    bottom: px2rem(28px);
    right: px2rem(10px);
    justify-content: flex-end;
    span {
      display: inline-block;
      width: px2rem(20px);
      height: px2rem(20px);
      font-size: 0;
      border-radius: 50%;
      margin: 0 15px;
      background-color: #ccc;
      &.sign-obvious {
        background-color: red;
      }
    }
  }
</style>

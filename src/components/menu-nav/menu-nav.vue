<template>
  <div class="menu">
    <div class="menu-list"
    @touchstart.stop='SlideStart($event)'
    @touchmove.stop='SlideMove($event)'
    @touchend.stop='SlideEnd($event)'
    @transitionend='MenuTransitionend'>
      <p v-for='(item, index) in menuList' :class="{'menu-active': index == indexActive}" :key="item.id" @click='MenuActive($event, index)'>
        {{item.name}}
      </p>
      <p class="menu-list-active"></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      indexActive: '0',
      startX: null,
      DateTime: null,
      menuNode: null,
      menuBox: null,
      menuMove: null
    }
  },
  mounted () {
    this.menuBox = document.querySelector('.menu-list')
    this.menuNode = document.querySelector('.menu')
    this.menuMove = this.menuNode.offsetWidth - this.menuBox.offsetWidth
  },
  props: {
    menuList: {
      type: Array
    }
  },
  methods: {
    /**
     * [SlideStart 点击屏幕来记录位置和时间]
     * @method SlideStart
     * @param  {[type]}   event
     * lizaiyang
     */
    SlideStart (event) {
      this.startX = event.changedTouches[0].pageX
      this.DateTime = Date.now()
    },
    /**
     * [SlideMove 滑动移动DOM节点]
     * @method SlideMove
     * @param  {[type]}  event
     * lizaiyang
     */
    SlideMove (event) {
      const touchs = event.changedTouches[0]
      const menuWidth = this.menuBox.offsetLeft <= this.menuMove
      if (this.menuBox.offsetLeft > 0) {
        this.menuBox.style.left = (touchs.pageX - this.startX) * 0.5 + 'px'
      } else if (menuWidth) {
        this.menuBox.style.left = (touchs.pageX - this.startX) * 0.5 + this.menuMove + 'px'
      } else {
        this.menuBox.style.left = (touchs.pageX - this.startX) * 1.5 + this.menuBox.offsetLeft + 'px'
      }
    },
    /**
     * [MenuTransitionend 当前DOM节点css过度动画结束后执行的操作]
     * @method MenuTransitionend
     * lizaiyang
     */
    MenuTransitionend () {
      const menuWidth = this.menuBox.offsetLeft <= this.menuMove
      if (this.menuBox.offsetLeft >= 0) {
        this.menuBox.style.left = 0
      } else if (menuWidth) {
        this.menuBox.style.left = this.menuMove + 'px'
        console.log('------------------------')
      }
    },
    /**
     * [SlideEnd：手指离开屏幕的操作, 1、控制速度, 2、解除事件的绑定 ]
     * @method SlideEnd
     * @param  {[type]} event
     * lizaiyang
     */
    SlideEnd (event) {
      setTimeout(() => {
        const touchs = event.changedTouches[0]
        if (touchs.pageX > this.startX) {
          if (Date.now() - this.DateTime < 100 && Date.now() - this.DateTime > 50) {
            this.menuBox.style.left = 0 + 'px'
          }
        } else {
          if (Date.now() - this.DateTime < 100 && Date.now() - this.DateTime > 50) {
            this.menuBox.style.left = this.menuMove + 'px'
          }
        }
      }, 70)
      this.$off('touchmove', this.SlideMove)
      this.$off('touchstart', this.SlideStart)
    },
    /**
     * [MenuActive 点击当前元素操作其它元素]
     * @method MenuActive
     * @param  {[Oject]}   event
     * @param  {[Number]}   index
     * lizaiyang
     */
    MenuActive (event, index) {
      this.indexActive = index
      const menuLineActive = document.querySelector('.menu-list-active')
      const menuList = event.target.offsetLeft
      let dewe = this.menuBox.offsetLeft
      let differenceVal = menuList - Math.abs(this.menuBox.offsetLeft)
      const screenWidth = this.menuNode.offsetWidth / 2
      menuLineActive.style.left = menuList + 'px'
      if (differenceVal > screenWidth) {
        this.menuBox.style.left = dewe = -((differenceVal - screenWidth) + event.target.offsetWidth / 2 + Math.abs(dewe)) + 'px'
      } else {
        if (event.target.offsetLeft > screenWidth) {
          this.menuBox.style.left = dewe = (screenWidth - differenceVal - event.target.offsetWidth / 2 + dewe) + 'px'
        } else {
          this.menuBox.style.left = 0
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  @import '../../assets/scss/function';
  .menu {
    position: relative;
    width: 100%;
    margin: px2rem(20px) auto 0 auto;
    height: px2rem(80px);
    overflow: hidden;
    &::-webkit-scrollbar  {
      width: 0;
      height: 0;
    }
  }
  .menu-list {
    height: px2rem(85px);
    position: absolute;
    left: 0;
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    transition: left .5s ease;
  }
  .menu-list p {
    display: inline-block;
    line-height: px2rem(60px);
    width: px2rem(100px);
    text-align: center;
    color: #464646;
    @include tap-highlight;
    font-size: px2rem(35px);
    margin: 0 px2rem(54px/2);
    padding-bottom: px2rem(30px);
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      position: absolute;
      left: 0;
      bottom: px2rem(5px);
      margin: 0;
      width: px2rem(100px);
      transition: left .3s ease-out;
      border-bottom: px2rem(7px) solid #805f45;
    }
    &:nth-last-child(2) {
      margin-right: 0;
    }
    &.menu-active {
      color: #805f45;
    }
  }
</style>

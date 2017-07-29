export default {
  install (Vue, options) {
    /**
     * [移动过度函数]
     * @method
     * @param  {[节点]}   dom
     * @param  {[String]}   transition
     * @param  {[Number]}   move
     * lizaiyang
     */
    Vue.prototype.transitionMove = function (dom, transition, move) {
      dom.style.transition = transition
      dom.style.transform = `translateX(${move}px)`
      setTimeout(() => {
        dom.style.transition = 'transform 0s ease'
      }, 100)
    }
  }
}

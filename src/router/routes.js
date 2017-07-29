const routes = [
  {
    path: '/',
    component (resolve) {
      require(['@/view/index.vue'], resolve)
    }
  }
]
export default routes

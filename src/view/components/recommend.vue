<template lang="html">
  <product-outline :title="title">
    <ul v-for="vo in datasList">
      <li><img src="" alt=""></li>
    </ul>
  </product-outline>
</template>

<script>
import productOutline from './product-outline.vue'
export default {
  components: {
    productOutline
  },
  data () {
    return {
      title: '新品',
      datasList: []
    }
  },
  mounted () {
    this.$axios.get('')
  }
}
</script>

<style lang="css">
</style>

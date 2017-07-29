<template lang="html">
  <product-outline :title='title'>
    <ul class="crowd" slot='product'>
      <li v-for='(vo, index) in product' class="crowd-product">
        <div class="product-text" :class="['background', 'background2', 'background3']">
          <span>{{vo.productName}}</span>
          <span>${{vo.support}}</span>
          <img :src="vo.productImg" alt="">
        </div>
        <div class="product-numerical">
          <p>
            <span class="support"><span>{{vo.support}}</span>人支持</span>
            <span class="percentage">{{vo.percentage}}%</span>
          </p>
        </div>
      </li>
    </ul>
  </product-outline>
</template>

<script>
import productOutline from './product-outline.vue'
export default {
  data () {
    return {
      title: '',
      product: null
    }
  },
  components: {
    productOutline
  },
  mounted () {
    this.$axios.get('/static/Data/product-crowd.json').then(response => {
      this.title = response.data.title
      console.log(response.data)
      this.product = response.data.data
    })
  }

}
</script>

<style lang="scss">
  @import '../../assets/scss/function.scss';
  .crowd {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .crowd-product {
    width: 49.7%;
    margin: 0 0 px2rem(28px) 0;
    @include font-dpr(14px);
  }
  .product-text {
    overflow: hidden;
    height: px2rem(375px);
    background-color: #f3f4f9;
    span{
      display: block;
      width: 100%;
      margin: px2rem(35px) 0 0 px2rem(22px);
      &:nth-child(2) {
        margin-top: px2rem(9px);
        // @include font-dpr(14px);
        color: #e01a3e;
      }
    }
    img {
      display: block;
      width: px2rem(200px);
      height: px2rem(200px);
      margin: px2rem(30px) auto 0 auto;
    }
  }
  .product-numerical {
    margin: px2rem(20px) px2rem(20px) 0 px2rem(20px);
    padding: 0 0 px2rem(25px) 0;
    border-bottom: 4px #f67a00 solid;
    p {
      overflow: hidden;
    }
  }
  .percentage {
    float: right;
    color: #e01a3e;
  }
  .support {
    float: left;
    span {
      color: #e01a3e;
    }
  }
</style>

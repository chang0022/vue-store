<template>
  <div class="products">
      <div class="container">
        <div class="row">
          <product-item v-for="product in products" :product="product" :key="product._id"></product-item>
        </div>
      </div>
  </div>
</template>
<script>
import ProductItem from './ProductItem';

export default {
  name: 'product-list',
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  components: {
    'product-item': ProductItem,
  },
};
</script>


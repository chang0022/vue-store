<template>
  <div>
    <div v-if="cart.length > 0">
      <div class="title">
        <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
      </div>
      <product-details v-for="product in cart" :product="product" :key="product._id"></product-details>
    </div>
    <div v-else>
      <div class="title">
        <h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetails from '@/components/product/ProductDetails';

export default {
  name: 'cart',
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  components: {
    'product-details': ProductDetails,
  },
};
</script>

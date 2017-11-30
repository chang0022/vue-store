<template>
  <div>
        <button v-if="isAdding" class="btn btn-primary btn-sm" @click="addToCart">
            <i class="fa fa-cart-plus"></i>
            添加
        </button>
        <button v-else class="btn btn-danger btn-sm" @click="removeFromCart(product._id)">
            <i class="fa fa-trash"></i>
            移除
        </button>
  </div>
</template>
<script>
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/mutation-types';

export default {
  name: 'product-button',
  props: ['product'],
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  computed: {
    isAdding() {
      return this.cart.indexOf(this.product) < 0;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit(ADD_TO_CART, this.product);
    },
    removeFromCart(id) {
      this.$store.commit(REMOVE_FROM_CART, id);
    },
  },
};
</script>


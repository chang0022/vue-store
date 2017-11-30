<template>
  <div>
    <div class="text-center">
      <h1><i class="fa fa-braille"></i> In Stock</h1>
    </div>
    <product-list/>
  </div>
</template>

<script>
import ProductList from '@/components/product/ProductList';

export default {
  name: 'home',
  components: {
    'product-list': ProductList,
  },
};
</script>

<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div class="card">
          <router-link :to="'/details/'+product._id" class="product-link">
            <div class="product__image">
                <img
                    class="img-fluid"
                    :src="product.image"
                    :alt="product.name" />
            </div>
            <div class="card-body">
                <div class="product__info">
                    <small class="card-text">{{product.manufacturer.name}}</small>
                    <h4 class="card-title">{{product.name}}</h4>
                </div>
                <div class="card-text">
                    ￥{{product.price}}
                </div>
            </div>
          </router-link>
          <div class="product__action">
              <product-button :product="product"></product-button>
          </div>
      </div>
  </div>
</template>
<script>
import ProductButton from './ProductButton';

export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton,
  },
};
</script>
<style scoped>
.card-title {
  font-size: 14px;
}
</style>

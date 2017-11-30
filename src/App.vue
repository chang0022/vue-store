<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">Stock</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#J_navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="J_navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link"><i class="fa fa-home"></i> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin" class="nav-link"><i class="fa fa-user"></i> Admin</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/cart" class="nav-link"><i class="fa fa-shopping-cart"></i> Cart ({{cartItemsCount}})</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
    <notifications/>
  </div>
</template>

<script>
import { ADD_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS, REMOVE_PRODUCT_SUCCESS } from './store/mutation-types';

export default {
  name: 'app',
  data() {
    return {
      cartItem: this.$store.state.cart,
    };
  },
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ADD_PRODUCT_SUCCESS:
            this.$notify({
              title: 'Success!',
              message: 'Product created.',
              type: 'success',
            });
            break;
          case UPDATE_PRODUCT_SUCCESS:
            this.$notify({
              title: 'Success!',
              message: 'Product updated.',
              type: 'success',
            });
            break;
          case REMOVE_PRODUCT_SUCCESS:
            this.$notify({
              title: 'Success!',
              message: 'Product deleted.',
              type: 'success',
            });
            break;
          default:
        }
      }
    });
  },
  computed: {
    cartItemsCount() {
      return this.cartItem.length;
    },
    showLoader() {
      return this.$store.state.showLoader;
    },
  },
};
</script>

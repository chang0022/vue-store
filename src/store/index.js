import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { productGetters, manufacturerGetters } from './getters';

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: [],
  },
  getters: Object.assign({}, productGetters, manufacturerGetters),
});

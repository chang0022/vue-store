<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
            v-model="model.name"
            v-validate="'required'"
            :class="{ 'error': errors.has('name') }"
        />
        <span
            class="small text-danger"
            v-show="errors.has('name')">Name is required</span>
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
            type="number"
            class="form-control"
            name="price"
            placeholder="Price"
            v-model="model.price"
            v-validate="'required'"
            :class="{ 'error': errors.has('price') }"
        />
        <span
            class="small text-danger"
            v-show="errors.has('price')">Price is required</span>
      </div>
      <div class="form-group">
        <label>Manufacturer</label>
        <select
            class="form-control"
            name="manufacturer"
            v-model="selected"
            v-validate="'required'"
            :class="{'error': errors.has('manufacturer') }">
            <option disabled value="">请选择供应商</option>
            <template v-for="manufacturer in manufacturers">
              <option
                  :value="manufacturer._id"
                  :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"
                  :key="manufacturer._id">{{manufacturer.name}}</option>
            </template>
<!-- v-model="model.manufacturer" -->
        </select>
        <span
            class="small text-danger"
            v-show="errors.has('manufacturer')">Manufacturer is required</span>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
            type="text"
            class="form-control"
            name="image"
            placeholder="Image"
            v-model="model.image"
            v-validate="'required|url'"
            :class="{'error': errors.has('image') }"
        />
        <span
            class="small text-danger"
            v-show="errors.has('image')">Image is required and must be a valid URL</span>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
            type="number"
            class="form-control"
            placeholder="Description"
            rows="5"
            v-model="model.description"
            v-validate="'required'"
            name="description"
            :class="{'error': errors.has('description') }">
        </textarea>
        <span
            class="small text-danger"
            v-show="errors.has('description')">Description is required</span>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import { ERROR_MSG } from '../../store/mutation-types';

export default {
  props: ['model', 'manufacturers', 'isEditing'],
  computed: {
    selected: {
      get() {
        if (!Object.keys(this.model).length === 0) {
          return this.model.manufacturers._id;
        }
        return '';
      },
      set(v) {
        console.log(v);
      },
    },
  },
  methods: {
    saveProduct() {
      this.$validator
        .validateAll()
        .then(result => {
          if (result) {
            this.$emit('save-product', this.model);
            return;
          }
          console.log('Correct them errors!');
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validation!',
            content: 'Please ensure the form is valid.',
          });
        })
        .catch(() => {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validation!',
            content: 'Please ensure the form is valid.',
          });
        });
    },
    // selectChange(event) {
    //   console.log(event.target.value);
    // },
  },
};
</script>

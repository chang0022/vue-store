const Product = require('../models/product');

const productController = {
  async all(ctx, next) {
    await Product.find({})
      .populate('manufacturer')
      .exec()
      .then(products => {
        ctx.body = products;
      })
      .catch(err => {
        console.error(err);
      });
  },
  async byId(ctx, next) {
    const idParam = ctx.params.id;
    await Product.findById(idParam)
      .populate('manufacturer')
      .exec()
      .then(products => {
        ctx.body = products;
      })
      .catch(err => {
        console.error(err);
      });
  },
  async create(ctx, next) {
    const requestBody = ctx.request.body;
    const newProduct = new Product(requestBody);
    await newProduct
      .save()
      .then(async saved => {
        await Product.findById(saved._id)
          .populate('manufacturer')
          .exec()
          .then(product => {
            ctx.body = product;
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  },
  async update(ctx, next) {
    const idParam = ctx.params.id;
    const product = ctx.body;
    await Product.findByIdAndUpdate(idParam, product)
      .then(updated => {
        ctx.body = updated;
      })
      .catch(err => {
        console.error(err);
      });
  },
  async remove(ctx, next) {
    const idParam = ctx.params.id;
    await Product.findByIdAndRemove(idParam)
      .then(() => {
        ctx.body = idParam;
      })
      .catch(err => {
        console.error(err);
      });
  },
};

module.exports = productController;

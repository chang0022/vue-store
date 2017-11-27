const Manufacturer = require('../models/manufacturer');

const manufacturerController = {
  async all(ctx, next) {
    await Manufacturer.find({})
      .exec()
      .then(manufacturers => {
        ctx.body = manufacturers;
      })
      .catch(err => {
        console.error(err);
      });
  },
};
module.exports = manufacturerController;

const Type = require('../models/Type');
const TypeController = {
  async createType(req, res) {
    const newType={
      name: req.body.name,
    }
    const {id, name} = await Type.create(newType);

    return res.status(201).json({id, name});
  },
};
module.exports = TypeController;

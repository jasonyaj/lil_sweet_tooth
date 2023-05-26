// const Product = require("../models/product.model");
import Product from "../models/product.model.js";

// READ ALL
async function getAll(req, res) {
  try {
    const product = await Product.find();
    if (product) {
      return res.status(200).json(product);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// // READ ONE
async function getOne(req, res) {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      return res.status(200).json(product);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// // CREATE
async function create(req, res) {
  try {
    const product = await Product.create(req.body);
    if (product) {
      return res.status(201).json(product);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export { getAll, getOne, create };
// // UPDATE
// module.exports.update = (req, res) => {
//   Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//     runValidators: true,
//   })
//     .then((updatedProduct) => {
//       res.json(updatedProduct);
//     })
//     .catch((err) => res.status(400).json(err));
// };

// // DELETE
// module.exports.delete = (req, res) => {
//   Product.deleteOne({ _id: req.params.id })
//     .then((result) => {
//       res.json({ result: result });
//     })
//     .catch((err) => {
//       res.json({ message: "Something went wrong", error: err });
//     });
// };

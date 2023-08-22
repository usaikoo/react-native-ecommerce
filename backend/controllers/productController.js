const Product = require("../models/Product");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    
    try {
      await newProduct.save();
      res.status(200).json("product created successfully");
    } catch (err) {
      res.status(500).json("product created fail"+err);
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json("fail to fetch the products");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).sort({
        createdAt: -1,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json("fail to fetch the product");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "funiture",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json("fail to search the products");
    }
  },
};

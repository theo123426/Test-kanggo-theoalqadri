const ProductModel = require("../models/masterproduckmodels");

class ProductController {
  static async getAll(req, res, next) {
    try {
      let product = await ProductModel.find();
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createProduct(req, res, next) {
    let newProduct = {
      name: req.body.title,
      price: req.body.overview,
      quantity: req.body.poster_path,
    };
    let sendProduct = {
      name: req.body.title,
      price: req.body.overview,
      quantity: req.body.poster_path,
    };
    try {
      let addProduct = await ProductModel.create(newProduct);
      res.status(201).json({ ...sendProduct, _id: addProduct.insertedId });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateProduct(req, res, next) {
    let { id } = req.params;
    let updatedProduct = {
      name: req.body.title,
      price: req.body.overview,
      quantity: req.body.poster_path,
    };
    try {
      let searchProduct = await ProductModel.findOne(id);
      if (searchProduct) {
        await ProductModel.put(id, updatedProduct);
        res.status(200).json({ ...updatedProduct, _id: id });
      } else {
        res.status(400).json({ message: "Product Not Found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async deleteProduct(req, res, next) {
    let { id } = req.params;
    try {
      let searchProduct = await ProductModel.findOne(id);
      if (searchProduct) {
        await ProductModel.delete(id);
        res.status(200).json({ name: searchProduct.name });
      } else {
        res.status(400).json({ message: "Product Not Found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  static async detailProduct(req, res, next) {
    let { id } = req.params;
    try {
      let productDetail = await ProductModel.findOne(id);
      res.status(200).json(productDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ProductController;

const { getDatabase } = require("../config/mongodb");
const mongo = require("mongodb");

class ProductModels {
  static find() {
    const productCollection = getDatabase().collection("master-product");

    return productCollection.find().toArray();
  }

  static create(data) {
    const productCollection = getDatabase().collection("master-product");

    return productCollection.insertOne(data);
  }

  static put(id, data) {
    const productCollection = getDatabase().collection("master-product");

    return productCollection.replaceOne({ _id: new mongo.ObjectId(id) }, data);
  }
  static findOne(id) {
    const productCollection = getDatabase().collection("master-product");

    return productCollection.findOne({ _id: new mongo.ObjectId(id) });
  }
  static delete(id) {
    const productCollection = getDatabase().collection("master-product");

    return productCollection.deleteOne({ _id: new mongo.ObjectId(id) });
  }
}

module.exports = ProductModels;

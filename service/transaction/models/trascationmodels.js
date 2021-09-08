const { getDatabase } = require("../config/mongodb");
const mongo = require("mongodb");

class ProductModels {
  static find() {
    const transactionCollection = getDatabase().collection("transaction");

    return transactionCollection.find().toArray();
  }
  static findOne(id) {
    const transactionCollection = getDatabase().collection("transaction");

    return transactionCollection.findOne({ _id: new mongo.ObjectId(id) });
  }
}

module.exports = ProductModels;

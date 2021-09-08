const { getDatabase } = require("../config/mongodb");
const mongo = require("mongodb");

class PembayaranModels {
  static find() {
    const pembayaranCollection = getDatabase().collection("pembayaran");

    return pembayaranCollection.find().toArray();
  }
  static findOne(id) {
    const pembayaranCollection = getDatabase().collection("pembayaran");

    return pembayaranCollection.findOne({ _id: new mongo.ObjectId(id) });
  }
}

module.exports = PembayaranModels;

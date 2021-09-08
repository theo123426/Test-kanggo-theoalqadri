const TransactionModels = require("../models/trascationmodels");

class TransactionController {
  static async getAll(req, res, next) {
    try {
      let transaction = await TransactionModels.find();
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async detailtransaction(req, res, next) {
    let { id } = req.params;
    try {
      let transactionDetail = await TransactionModels.findOne(id);
      res.status(200).json(transactionDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = TransactionController;

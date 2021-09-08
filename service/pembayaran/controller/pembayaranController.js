const PembayaranModels = require("../models/pembayaranModels");

class PembayaranController {
  static async getAll(req, res, next) {
    try {
      let pembayaran = await PembayaranModels.find();
      res.status(200).json(pembayaran);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async detailpembayaran(req, res, next) {
    let { id } = req.params;
    try {
      let pembayaranDetail = await PembayaranModels.findOne(id);
      res.status(200).json(pembayaranDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PembayaranController;

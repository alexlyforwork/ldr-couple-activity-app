import CoupleService from "../services/couple.service.js";

class CoupleController {
  async createCouple(req, res) {
    try {
      if (!req.body || !req.body.user1_id) {
        return res
          .status(400)
          .json({ status: "error", message: "Invalid request body." });
      }
      const { user1_id } = req.body;
      const response = await CoupleService.createCouple(user1_id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  async getCoupleByCode(req, res) {
    try {
      if (!req.params || !req.params.code || isNaN(req.params.code)) {
        return res
          .status(400)
          .json({ status: "error", message: "Invalid request params." });
      }
      const { code } = req.params;
      const response = await CoupleService.getCoupleByCode(code);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  async addUser2ToCoupleByCode(req, res) {
    try {
      if (!req.body || !req.body.code || !req.body.user2_id) {
        return res
          .status(400)
          .json({ status: "error", message: "Invalid request body." });
      }
      const { code, user2_id } = req.body;
      const response = await CoupleService.addUser2ToCoupleByCode(
        code,
        user2_id,
      );
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}

export default new CoupleController();

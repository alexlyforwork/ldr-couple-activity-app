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
}

export default new CoupleController();

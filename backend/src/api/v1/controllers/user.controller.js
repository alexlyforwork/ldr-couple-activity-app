import UserService from "../services/user.service.js";

class UserController {
  async getUserByEmail(req, res) {
    try {
      if (!req.params || !req.params.email) {
        return res
          .status(400)
          .json({ status: "error", message: "Invalid request params." });
      }
      const { email } = req.params;
      const response = await UserService.getUserByEmail(email);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}

export default new UserController();

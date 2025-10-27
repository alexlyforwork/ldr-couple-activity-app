import UserService from "../services/user.service";

class UserController {
    async getUserByEmail (req,res){
        try {
            if (!req.body || !req.body.email) {
                return res.status(400).json({ status: 'error', message: 'Invalid request body.' });
            }
            const {email} = req.body;
            const response = await UserService.getUserByEmail(email);
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({
            status: 'error',
            message: error.message,
      });
        }
    }
}

export default new UserController();
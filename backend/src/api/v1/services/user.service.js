import User from "@/models/user.js";

class UserService{
    async getUserByEmail(email){
        try{
            const user = User.find({email: email});
            return { status: ResponseStatus.SUCCESS, data: user };
        } catch {
            throw new Error('Cannot find user');
        }
    }
}

export default new UserService();
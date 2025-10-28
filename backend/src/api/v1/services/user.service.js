import User from "../../../models/user.js";

class UserService{
    /**
    * Get user detail by email
    * @param email
    * @returns user data
    * @throws Error if cannot find user
    */
    async getUserByEmail(email){
        const user = await User.find({email});
        if (user.length==0){
            throw new Error ('Cannot find user')
        }
        return { status: "SUCCESS", data: user[0] };
    }

}

export default new UserService();
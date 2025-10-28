import User from "../../../models/user.js";

class UserService {
  /**
   * Get user detail by email
   * @param email
   * @returns user data
   * @throws Error if cannot find user
   */
  async getUserByEmail(email) {
    const user = await User.find({ email });
    if (user.length == 0) {
      throw new Error("Cannot find user");
    }
    return { status: "SUCCESS", data: user[0] };
  }
  /**
   * Update user detail by email
   * @param email, name || expectaion
   * @throws Error if cannot find user
   */
  async updateUserByEmail(email, name, expectation) {
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { $set: { name: name, expectation: expectation } },
      {new: true, runValidators: true}
    );
    if (!updatedUser) throw new Error("Cannot find user")
    return {status: "SUCCESS", data: updatedUser};
  }
}

export default new UserService();

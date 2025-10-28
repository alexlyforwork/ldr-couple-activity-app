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
    let currentUser;
    try {
      const user = await this.getUserByEmail(email);
      currentUser = user.data;
    } catch (error) {
      throw error;
    }
    if (!name || name.length === 0) {
      name = currentUser.name;
    }
    if (!expectation || expectation.length === 0) {
      expectation = currentUser.expectation;
    }
    await User.updateOne(
      { email: email },
      { $set: { name: name, expectation: expectation } },
      {new: true}
    );
    return {status: "SUCCESS"};
  }
}

export default new UserService();

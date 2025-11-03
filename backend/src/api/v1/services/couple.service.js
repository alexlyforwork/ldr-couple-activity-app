import Couple from "../../../models/couple.js";
import UserService from "./user.service.js";

class CoupleService {
  /**
   * Initiate a new couple
   * @param user1_id
   * @return new couple 
   * @throws error if user1 not found
   */
  async createCouple(user1_id) {
    await UserService.checkUserById(user1_id)
    const newCouple = new Couple({
      user1_id: user1_id,
      user2_id: null,
      code: await this.generateCode(),
      last_session_id: null,
      next_session_id: null,
      next_deadline: null,
    });
    await newCouple.save();

    return { status: "SUCCESS", data: newCouple.toObject() };
  }

  /**
   * Generate a random code that does not match any in the database
   * @return a random code
   */
  async generateCode() {
    let num = 0;
    let exists = true;
    while (exists) {
      num = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
      exists = await Couple.exists({ code: num });
    }
    return num;
  }

  /**
   * Get couple details based on code
   * @return couple data
   * @throws error if couple not found
   */
  async getCoupleByCode(code) {
    const couple = await Couple.find({ code });
    if (couple.length == 0) {
      throw new Error("Cannot find couple");
    }
    return { status: "SUCCESS", data: couple[0] };
  }

  /**
   * Add user2 to the couple based on code
   * @return couple data
   * @throws error if couple not found
   * @throws error if user2 not found
   * @throws error if user2 == user1
   */
  async addUser2ToCoupleByCode(code, user2_id){
    const couple = await Couple.findOne({ code });
    if (!couple) throw new Error("Cannot find couple");

    if (couple.user1_id.toString() === user2_id.toString()) {
      throw new Error("User2 cannot be the same as User1");
    }

    couple.user2_id = user2_id;
    couple.next_deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await couple.save();

    return { status: "SUCCESS", data: couple };
  }
}

export default new CoupleService();

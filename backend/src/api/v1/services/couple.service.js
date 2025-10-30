import Couple from "../../../models/couple.js";

class CoupleService {
  /**
   * Initiate a new couple
   * @param user1_id
   * @return new couple data
   */
  async createCouple(user1_id) {
    const newCouple = new Couple({
      user1_id: user1_id,
      user2_id: null,
      code: await this.generateCode(),
      last_session: null,
      next_session: null,
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
  async getCoupleByCode(code){
    const couple = await Couple.find({code});
    if (couple.length == 0) {
        throw new Error("Cannot find couple");
    }
    return { status: "SUCCESS", data: couple[0] }
  }
}

export default new CoupleService();

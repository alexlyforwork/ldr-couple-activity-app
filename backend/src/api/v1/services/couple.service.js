import Couple from "../../../models/couple.js"

class CoupleService {
    /**
     * Initiate a new couple
     * @param user1_id
     * @return new couple data
     * @throws 
     */
    async createCouple(user1_id){
        const newCouple = new Couple({
            user1_id: user1_id,
            user2_id: null,
            code: this.generateCode(),
            last_session: null,
            next_session: null,
            next_deadline: {type: Date}
        })
        await newCouple.save();
        return {status: "SUCCESS", data: newCouple};
    }

    /**
     * Generate a random code that does not match any in the database
     * @return a random code
     * @throws 
     */
    async generateCode(){
        let num = 0;
        while (num == 0 || Couple.find({num})){
            num = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        }
        return num;
    }
}

export default new CoupleService;
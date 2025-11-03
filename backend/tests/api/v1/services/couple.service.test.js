import CoupleService from "@/api/v1/services/couple.service.js"
import UserService from  "@/api/v1/services/user.service.js"
import { jest } from "@jest/globals";
import Couple from "@/models/couple.js";
import { MOCK_COUPLE, UPDATED_MOCK_COUPLE } from "../../../fixtures.js";


describe('Couple Service - createCouple', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('should save and return couple data successfully', async() => {
        jest.spyOn(Couple.prototype,"save").mockResolvedValue();
        jest.spyOn(UserService,"checkUserById").mockResolvedValue()
        jest.spyOn(CoupleService,"generateCode").mockResolvedValue('123456');

        const couple = await CoupleService.createCouple(MOCK_COUPLE.user1_id)
        const data = (({ _id, ...rest }) => rest)(couple.data);
        const MOCK_COUPLE_DATA = (({ _id, ...rest }) => rest)(MOCK_COUPLE);
        expect(couple.status).toEqual("SUCCESS")
        expect(data).toEqual(MOCK_COUPLE_DATA)
    })
})

describe('Couple Service - getCoupleByCode', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('should get couple data successfully', async()=>{
        jest.spyOn(Couple,"find").mockResolvedValue([MOCK_COUPLE])

        const couple = await CoupleService.getCoupleByCode(MOCK_COUPLE.code)
       
        expect(couple.status).toEqual("SUCCESS")
        expect(couple.data).toEqual(MOCK_COUPLE)
    })
    it('should throw Error if no couple matches the code', async () => {
        jest.spyOn(Couple,"find").mockResolvedValue([])

        await expect(CoupleService.getCoupleByCode(MOCK_COUPLE.code))
            .rejects
            .toThrow('Cannot find couple')
    })
})

describe("Couple Service - addUser2ToCoupleByCode", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('should add user2 successfully', async () => {
        jest.spyOn(UserService,"checkUserById").mockResolvedValue()
        jest.spyOn(Couple,"findOne").mockResolvedValue(new Couple(MOCK_COUPLE));
        jest.spyOn(Couple.prototype,"save").mockResolvedValue(UPDATED_MOCK_COUPLE);
        
        const updatedCouple = await CoupleService.addUser2ToCoupleByCode(MOCK_COUPLE.code, UPDATED_MOCK_COUPLE.user2_id)
        expect(updatedCouple.status).toEqual("SUCCESS")
        expect(updatedCouple.data).toMatchObject({
        ...UPDATED_MOCK_COUPLE,
        next_deadline: expect.any(Date),
        });
    })
    it('should throw cannot find couple if code is not valid', async() => {
        jest.spyOn(Couple,"findOne").mockResolvedValue(null)
        await expect(CoupleService.addUser2ToCoupleByCode(MOCK_COUPLE.code, UPDATED_MOCK_COUPLE.user2_id))
            .rejects
            .toThrow('Cannot find couple')
    })
    it('should throw error if user2 is the same as user1', async () => {
        jest.spyOn(Couple,"findOne").mockResolvedValue(MOCK_COUPLE);
        await expect(CoupleService.addUser2ToCoupleByCode(MOCK_COUPLE.code, MOCK_COUPLE.user1_id))
            .rejects
            .toThrow('User2 cannot be the same as User1')
    })
})
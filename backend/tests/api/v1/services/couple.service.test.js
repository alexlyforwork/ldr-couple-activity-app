import CoupleService from "@/api/v1/services/couple.service.js"
import { jest } from "@jest/globals";
import Couple from "@/models/couple.js";
import { MOCK_COUPLE } from "../../../fixtures.js";


describe('Couple Service - createCouple', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('should save and return couple data successfully', async() => {
        jest.spyOn(Couple.prototype,"save").mockResolvedValue();
        jest.spyOn(CoupleService,"generateCode").mockResolvedValue('123456');

        const couple = await CoupleService.createCouple(MOCK_COUPLE.user1_id)
        const data = (({ _id, ...rest }) => rest)(couple.data);
        const MOCK_COUPLE_DATA = (({ _id, ...rest }) => rest)(MOCK_COUPLE);
        expect(couple.status).toEqual("SUCCESS")
        expect(data).toEqual(MOCK_COUPLE_DATA)
    })

})

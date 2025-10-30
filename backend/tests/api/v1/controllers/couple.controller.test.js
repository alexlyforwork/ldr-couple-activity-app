import Couple from "@/api/v1/controllers/couple.controller.js";
import { jest } from "@jest/globals";
import { MOCK_COUPLE } from "../../../fixtures.js";
import CoupleService from "@/api/v1/services/couple.service.js";
import CoupleController from "@/api/v1/controllers/couple.controller.js";

describe('Couple Controller', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });
    describe('createCouple', () => {
        it('should create couple successfully', async () => {
            const req = {
                body: {user1_id: MOCK_COUPLE.user1_id}
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            const mockResponse = {
                status: "SUCCESS",
                data: MOCK_COUPLE
            }
            jest.spyOn(CoupleService,"createCouple").mockResolvedValue(mockResponse);

            await CoupleController.createCouple(req,res)
            expect(CoupleService.createCouple).toHaveBeenCalledWith(MOCK_COUPLE.user1_id)
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockResponse);
        })
        it('should throw error if invalid request body', async () => {
            const req = {
                body: {}
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            await CoupleController.createCouple(req,res)
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Invalid request body.' });
        })
    })
    
    describe('getCoupleByCode', () => {
        it('should get couple successfully', async () => {
            const req = {
                params: {code: MOCK_COUPLE.code}
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            const mockResponse = {
                status: "SUCCESS",
                data: MOCK_COUPLE
            }
            jest.spyOn(CoupleService,"getCoupleByCode").mockResolvedValue(mockResponse);

            await CoupleController.getCoupleByCode(req,res)
            expect(CoupleService.getCoupleByCode).toHaveBeenCalledWith(MOCK_COUPLE.code)
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockResponse);
        })
        it('should throw error if invalid request body', async () => {
            const req = {
                params: {}
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            await CoupleController.getCoupleByCode(req,res)
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Invalid request params.' });
        })
    })
})

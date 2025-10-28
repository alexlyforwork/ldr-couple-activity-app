import UserController from "@/api/v1/controllers/user.controller.js";
import { jest } from "@jest/globals";
import { MOCK_USER } from "../../../fixtures.js";
import UserService from "@/api/v1/services/user.service.js";

describe('User Controller', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });
    describe('getUserByEmail', () => {
        it('should get user successfully', async () => {
            const req = {
                params: {email: MOCK_USER.email}
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            const mockResponse = {
                status: "SUCCESS",
                data: MOCK_USER
            }
            jest.spyOn(UserService,"getUserByEmail").mockResolvedValue(MOCK_USER);

            await UserController.getUserByEmail(req,res)
            expect(UserService.getUserByEmail).toHaveBeenCalledWith(MOCK_USER.email)
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockResponse.data);
        })
        it('should throw error if invalid request body', async () => {
            const req = {
                params: {}
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            await UserController.getUserByEmail(req,res)
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Invalid request params.' });
        })
    })
})

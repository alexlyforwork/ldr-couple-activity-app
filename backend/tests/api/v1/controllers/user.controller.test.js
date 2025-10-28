import UserController from "@/api/v1/controllers/user.controller.js";
import { jest } from "@jest/globals";
import { MOCK_USER, UPDATED_MOCK_USER } from "../../../fixtures.js";
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
            jest.spyOn(UserService,"getUserByEmail").mockResolvedValue(mockResponse);

            await UserController.getUserByEmail(req,res)
            expect(UserService.getUserByEmail).toHaveBeenCalledWith(MOCK_USER.email)
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
            await UserController.getUserByEmail(req,res)
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Invalid request params.' });
        })
    })
    describe('updateUserByEmail', () => {
        it('should update user successfully', async () => {
            const req = {
                body: {
                    email: MOCK_USER.email,
                    name: MOCK_USER.name,
                    expectation: MOCK_USER.expectation
                }
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            }
            const mockResponse = {
                status: "SUCCESS",
                data: UPDATED_MOCK_USER
            }
            
            jest.spyOn(UserService,"updateUserByEmail").mockResolvedValue(mockResponse);
            
            await UserController.updateUserByEmail(req,res)
            expect(UserService.updateUserByEmail).toHaveBeenCalledWith(MOCK_USER.email, MOCK_USER.name, MOCK_USER.expectation);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockResponse)
        })
    })
})

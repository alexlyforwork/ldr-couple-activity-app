import UserService from "@/api/v1/services/user.service.js"
import { jest } from "@jest/globals";
import { MOCK_USER } from "../../../fixtures.js";
import User from "@/models/user.js"

describe('User Service - getUserByEmail', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('should get user by email successfully', async () => {
        jest.spyOn(User,"find").mockResolvedValue([MOCK_USER])

        const user = await UserService.getUserByEmail(MOCK_USER.email)

        expect(user.status).toEqual("SUCCESS")
        expect(user.data).toEqual(MOCK_USER)
    })
    it('should throw Error if no user matches the email', async () => {
        jest.spyOn(User,"find").mockResolvedValue([])

        await expect(UserService.getUserByEmail(MOCK_USER.email))
            .rejects
            .toThrow('Cannot find user')
    })
})

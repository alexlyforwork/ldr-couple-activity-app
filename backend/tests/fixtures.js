import mongoose from "mongoose";

const user_id = new mongoose.Types.ObjectId()
const couple_id = new mongoose.Types.ObjectId()

export const MOCK_USER = {
    _id: user_id,
    name: "Alex Ly",
    email: "alex@example.com",
    activities: [
        { title: "Watching Anime", rating: 5 },
        { title: "Playing Games", rating: 4 },
        { title: "Drawing", rating: 5 }
    ],
    expectation: "Low-cost activities"
}

export const MOCK_COUPLE = {
    _id: couple_id,
    user1_id: user_id,
    user2_id: null,
    code: 123456,
    last_session: null,
    next_session: null,
    next_deadline: null
}

export const UPDATED_MOCK_USER = {
    _id: user_id,
    name: "Alex Lu",
    email: "alex@example.com",
    activities: [
        { title: "Watching Anime", rating: 5 },
        { title: "Playing Games", rating: 4 },
        { title: "Drawing", rating: 5 }
    ],
    expectation: "Lovey dovey activities"
}
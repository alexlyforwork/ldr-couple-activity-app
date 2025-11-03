import mongoose from "mongoose";

const user_id = new mongoose.Types.ObjectId()
const user2_id = new mongoose.Types.ObjectId()
const couple_id = new mongoose.Types.ObjectId()
const next_deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

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
    last_session_id: null,
    next_session_id: null,
    next_deadline: null
}

export const UPDATED_MOCK_COUPLE = {
    _id: couple_id,
    user1_id: user_id,
    user2_id: user2_id,
    code: 123456,
    last_session_id: null,
    next_session_id: null,
    next_deadline: next_deadline
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
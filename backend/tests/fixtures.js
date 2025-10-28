import mongoose from "mongoose";

const user_id = new mongoose.Types.ObjectId()

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
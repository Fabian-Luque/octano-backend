import { Schema } from "mongoose";

export const MoveSchema = new Schema({
    move: {
        type: String,
        required: true
    },
    kills: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
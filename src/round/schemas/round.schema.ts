import { Schema } from "mongoose";

export const RoundSchema = new Schema({
    player1: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    player1move: {
        type: Schema.Types.ObjectId,
        ref: 'Move',
    },
    player2move: {
        type: Schema.Types.ObjectId,
        ref: 'Move',
    },
    winner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});
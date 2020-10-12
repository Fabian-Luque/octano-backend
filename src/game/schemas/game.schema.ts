import { Schema } from "mongoose";

export const GameSchema = new Schema({
    player1: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    rounds: [{
        type: Schema.Types.ObjectId,
        ref: 'Round',
    }],
    winner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});